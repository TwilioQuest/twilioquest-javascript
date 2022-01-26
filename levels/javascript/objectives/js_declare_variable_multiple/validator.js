const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'chestConfiguration.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.scriptNotFound')} <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = { __TQ: {} };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.accessLevel = accessLevel;
        __TQ.favoriteRobot = favoriteRobot;
        __TQ.verifiedUser = verifiedUser;
      } catch(e) {
        __TQ.error = e;
      }
    `;

    // First, execute user code to ensure it runs unchanged
    let script = new vm.Script(userCode);
    script.runInNewContext();

    // Assuming that it doesn't throw, we can try running it with our test
    // code appended to it.
    script = new vm.Script(testCode);
    script.runInNewContext(scriptContext);

    // Inspect the script context for the stuff we want
    const tq = scriptContext.__TQ;
    if (tq.error) {
      console.log(tq.error);
      if (tq.error.name === 'ReferenceError') {
        const { message } = tq.error;

        let missingVariable = 'accessLevel';
        if (message.includes('favoriteRobot')) {
          missingVariable = 'favoriteRobot';
        } else if (message.includes('verifiedUser')) {
          missingVariable = 'verifiedUser';
        }

        return helper.fail(helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.notDefined', { missingVariable }));
      } else {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.classes.validator.error.validation')}
          ${tq.error}
        `);
      }
    }

    // Check variable types, and provide appropriate feedback
    if (typeof tq.accessLevel !== 'number') {
      let message = `
        ${helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.notNumber')}
        <span class="highlight">${typeof tq.accessLevel}</span> object.
      `;

      if (typeof tq.accessLevel === 'string') {
        message += helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.string');
      }

      return helper.fail(message);
    }

    if (typeof tq.verifiedUser !== 'boolean') {
      let message = `
        ${helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.notBoolean')}
        <span class="highlight">${typeof tq.verifiedUser}</span> object.
      `;

      if (typeof tq.verifiedUser === 'string') {
        message += helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.string-boolean');
      }

      return helper.fail(message);
    }

    if (typeof tq.favoriteRobot !== 'string') {
      let message = `
        ${helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.notString')}
        <span class="highlight">${typeof tq.favoriteRobot}</span> object.
      `;

      return helper.fail(message);
    }

    // Check variable values, now that we know they exist
    if (tq.accessLevel !== 7) {
      return helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.notSeven')}
        <span class="highlight">${tq.accessLevel}</span>.
      `);
    }

    if (tq.favoriteRobot !== 'Cedric') {
      return helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.notCedric')} 
        <span class="highlight">"${tq.favoriteRobot}"</span>.
      `);
    }

    if (tq.verifiedUser !== true) {
      return helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.error.notTrue')}
        <span class="highlight">${tq.verifiedUser}</span>.
      `);
    }

    helper.success(helper.world.getTranslatedString('javascript.js_declare_variable_multiple.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.classes.validator.error.executingJS')} <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};
