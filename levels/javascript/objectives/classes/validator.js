const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function isClassDeclaration(obj) {
  return isFunction(obj) && obj.toString && obj.toString().includes('class');
}

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, 'classes.js');

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.classes.validator.error.scriptNotFound')}
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = {
      process: process,
      __TQ: {},
    };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.Materializer = Materializer;
      } catch(e) {
        __TQ.error = e;
      }
    `;

    // First, execute user code to ensure it runs unchanged
    let script = new vm.Script(userCode);
    script.runInNewContext(Object.assign({}, scriptContext));

    // Assuming that it doesn't throw, we can try running it with our test
    // code appended to it.
    script = new vm.Script(testCode);
    script.runInNewContext(scriptContext);

    // Inspect the script context for the stuff we want
    const tq = scriptContext.__TQ;

    if (tq.error) {
      console.log(tq.error);
      if (tq.error.name === 'ReferenceError') {
        return helper.fail(helper.world.getTranslatedString('javascript.classes.validator.error.reference'));
      } else {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.classes.validator.error.validation')}
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isClassDeclaration(tq.Materializer)) {
      let message = helper.world.getTranslatedString('javascript.classes.validator.error.notAClass');
      return helper.fail(message);
    }

    // Check functionality
    try {
      const result1 = new tq.Materializer('Gene');
      const result2 = new tq.Materializer('Irene');

      if (result1.target !== 'Gene') {
        return helper.fail(helper.world.getTranslatedString('javascript.classes.validator.error.notCorrectlyReading'));
      }

      if (result1.activated !== false) {
        return helper.fail(helper.world.getTranslatedString('javascript.classes.validator.error.activatedFalse'));
      }

      if (!isFunction(result1.activate)) {
        return helper.fail(helper.world.getTranslatedString('javascript.classes.validator.error.activateFn'));
      }

      if (!isFunction(result1.materialize)) {
        return helper.fail(helper.world.getTranslatedString('javascript.classes.validator.error.materializeFn'));
      }

      result1.activate();

      if (result1.activated !== true) {
        return helper.fail(helper.world.getTranslatedString('javascript.classes.validator.error.activatedTrue'));
      }

      const result1Target = result1.materialize();

      if (result1Target !== 'Gene') {
        return helper.fail(helper.world.getTranslatedString('javascript.classes.validator.error.returnTargetOnActive'));
      }

      const result2Target = result2.materialize();

      if (result2Target !== undefined) {
        return helper.fail(helper.world.getTranslatedString('javascript.classes.validator.error.returnUndefinedOnInActive'));
      }
    } catch (ee) {
      return helper.fail(`
        ${helper.world.getTranslatedString('javascript.classes.validator.error.constructorOrFunctions')}
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(helper.world.getTranslatedString('javascript.classes.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.classes.validator.error.executingJS')}
      <span class="highlight">${e}</span>
    `);
  }
};
