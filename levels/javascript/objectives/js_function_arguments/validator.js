const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

const isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'politeLasers.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_function_arguments.validator.error.scriptNotFound')}
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = {
      process: process,
      __TQ: {} 
    };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.getLaserSetting = getLaserSetting;
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
        return helper.fail(helper.world.getTranslatedString('javascript.js_function_arguments.validator.error.notDefinedFn'));
      } else {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.classes.validator.error.validation')}
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isFunction(tq.getLaserSetting)) {
      let message = helper.world.getTranslatedString('javascript.js_function_arguments.validator.error.notCallableFn');
      return helper.fail(message);
    }

    // Check functionality
    try {
      const result = tq.getLaserSetting(1);
      const result2 = tq.getLaserSetting('now!');
      const result3 = tq.getLaserSetting('please');

      if (result === undefined || result === null) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_function_arguments.validator.error.notReturningValue'));
      }

      if (typeof result !== 'string') {
        return helper.fail(helper.world.getTranslatedString('javascript.js_declare_function.validator.error.notReturnString'));
      }

      if (result !== 'ON') {
        return helper.fail(helper.world.getTranslatedString('javascript.js_function_arguments.validator.error.notOnString', { result })); 
      }

      if (result2 !== 'ON') {
        return helper.fail(helper.world.getTranslatedString('javascript.js_function_arguments.validator.error.notOnString', { result }));
      }

      if (result3 !== 'OFF') {
        return helper.fail(helper.world.getTranslatedString('javascript.js_function_arguments.validator.error.notReturnOff'));
      }

    } catch(ee) {
      return helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_function_arguments.validator.error.executing')} <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(helper.world.getTranslatedString('javascript.js_function_arguments.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.classes.validator.error.executingJS')} <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};
