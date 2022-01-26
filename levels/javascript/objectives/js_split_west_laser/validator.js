const vm = require("vm");
const path = require("path");
const jetpack = require("fs-jetpack");

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function isClassDeclaration(obj) {
  return isFunction(obj) && obj.toString && obj.toString().includes("class");
}

module.exports = async (helper) => {
  const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;
  const isObjectiveReady =
    TQ_JAVASCRIPT_WORLD_STATE.beamTwoOnline &&
    TQ_JAVASCRIPT_WORLD_STATE.beamThreeOnline &&
    TQ_JAVASCRIPT_WORLD_STATE.beamFourOnline;

  // The player needs to enable the other beams first
  if (!isObjectiveReady) {
    return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.isObjectiveReady_fail'));
  }

  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "ducktypium.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_split_west_laser.validator.exists')}
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
        __TQ.Ducktypium = Ducktypium;
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
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_ducktypium'));
      } else {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.classes.validator.error.validation')}
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isClassDeclaration(tq.Ducktypium)) {
      let message = helper.world.getTranslatedString('javascript.js_split_west_laser.validator.is_class_declaration_ducktypium');
      return helper.fail(message);
    }

    // Check functionality
    try {
      // First ensure it errors out on an incorrect input
      try {
        const badColor = new tq.Ducktypium("mauve");

        // If we get to this point, it's actually a failure
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_bad_color'));
      } catch (colorError) {
        // This is actually what we want, so continue...
      }

      // Create a test instance
      const dt = new tq.Ducktypium("blue");

      if (dt.color !== "blue") {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_blue'));
      }

      if (!dt.calibrationSequence || dt.calibrationSequence.length !== 0) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.calibration_sequence'));
      }

      // Ensure functions are defined
      if (!dt.refract || !isFunction(dt.refract)) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_refract'));
      }

      if (!dt.calibrate || !isFunction(dt.calibrate)) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_calibrate'));
      }

      // Check functionality of methods
      if (dt.refract("blue") !== "blue") {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_refract_blue'));
      }

      if (dt.refract("yellow") !== "green") {
        return helper.fail(`
          The refract method should return color you get when its "color"
          property is combined with another primary color. See the color
          combinations in the "Objective" tab.
        `);
        helper.world.getTranslatedString('javascript.js_split_west_laser.validator.isObjectiveReady_fail')
      }

      dt.color = "red";
      if (dt.refract("yellow") !== "orange") {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_refract_color'));
      }

      dt.color = "yellow";
      if (dt.refract("blue") !== "green") {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_refract_color'));
      }

      dt.calibrate([10, 20, 1]);

      if (
        dt.calibrationSequence[0] !== 3 ||
        dt.calibrationSequence[1] !== 30 ||
        dt.calibrationSequence[2] !== 60
      ) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_calibrate_sequence'));
      }
    } catch (ee) {
      console.log(ee);
      return helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_split_west_laser.validator.fail_constructor')}
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(helper.world.getTranslatedString('javascript.js_split_west_laser.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.classes.validator.error.executingJS')} <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};
