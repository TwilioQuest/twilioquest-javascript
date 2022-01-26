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
    TQ_JAVASCRIPT_WORLD_STATE.northWing &&
    TQ_JAVASCRIPT_WORLD_STATE.northWing.hadSavedConversation;

  // The player needs to enable the other beams first
  if (!isObjectiveReady) {
    return helper.fail(helper.world.getTranslatedString('javascript.js_split_north_laser.validator.is_objective_ready'));
  }

  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "targetingSolution.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_split_north_laser.validator.fail_find_targeting_solution')}
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
        __TQ.TargetingSolution = TargetingSolution;
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
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_north_laser.validator.class_not_defined'));
      } else {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.classes.validator.error.validation')}
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isClassDeclaration(tq.TargetingSolution)) {
      let message = helper.world.getTranslatedString('javascript.js_split_north_laser.validator.fail_is_class_declaration');
      return helper.fail(message);
    }

    // Check functionality
    try {
      const result1 = new tq.TargetingSolution({
        x: 32.891,
        y: 120.012,
        z: 345.12,
      });

      if (!isFunction(result1.target)) {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_north_laser.validator.should_have_target'));
      }

      const result1Target = result1.target().trim();

      if (result1Target !== "(32.891, 120.012, 345.12)") {
        return helper.fail(helper.world.getTranslatedString('javascript.js_split_north_laser.validator.fail_specified_format'));
      }
    } catch (ee) {
      return helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_split_north_laser.validator.fail_execute_constructor')}
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(helper.world.getTranslatedString('javascript.js_split_north_laser.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.classes.validator.error.executingJS')} <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};
