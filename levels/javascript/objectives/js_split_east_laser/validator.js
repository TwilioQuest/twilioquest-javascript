const vm = require("vm");
const path = require("path");
const jetpack = require("fs-jetpack");

const isFunction = function (obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

module.exports = async (helper) => {
  const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;
  const isObjectiveReady =
    TQ_JAVASCRIPT_WORLD_STATE.eastWing &&
    TQ_JAVASCRIPT_WORLD_STATE.eastWing.hadSavedConversation;

  // The player needs to enable the other beams first
  if (!isObjectiveReady) {
    return helper.fail(helper.world.getTranslatedString('javascript.js_split_east_laser.validator.is_objective_ready'));
  }

  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "laserPower.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_split_east_laser.validator.laser_power_not_found')} <br/><br/>
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
        __TQ.calculatePower = calculatePower;
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
      if (tq.error.name === "ReferenceError") {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_east_laser.validator.calculate_power_not_defined'));
      } else {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.classes.validator.error.validation')}
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isFunction(tq.calculatePower)) {
      let message = helper.world.getTranslatedString('javascript.js_split_east_laser.validator.not_callable');
      return helper.fail(message);
    }

    // Check functionality
    try {
      const result = tq.calculatePower([]);
      const result2 = tq.calculatePower([4, 1, 10]);

      if (result === undefined || result === null) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_east_laser.validator.not_returning_value'));
      }

      if (isNaN(result)) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_east_laser.validator.not_returning_number'));
      }

      if (result !== 0 || result2 !== 30) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_east_laser.validator.returned_wrong_number'));
      }
    } catch (ee) {
      return helper.fail(helper.world.getTranslatedString('javascript.js_split_east_laser.validator.error_running_calculatePower'));
    }

    helper.success(helper.world.getTranslatedString('javascript.js_split_east_laser.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.classes.validator.error.executingJS')} <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};
