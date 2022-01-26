const path = require("path");
const jetpack = require("fs-jetpack");
const {
  executeCodeString,
} = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, "sortOrder.js");

    const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;
    const isObjectiveReady =
      TQ_JAVASCRIPT_WORLD_STATE.eastWing &&
      TQ_JAVASCRIPT_WORLD_STATE.southWing.hadSavedConversation;

    // The player needs to enable the other beams first
    if (!isObjectiveReady) {
      return helper.fail(helper.world.getTranslatedString('javascript.js_split_south_laser.validator.is_objective_ready'));
    }

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_split_south_laser.validator.fail_sort_order')}
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, ["a", "b"]);

    if (!result.stdout || result.stdout.trim() !== "-1") {
      helper.fail(helper.world.getTranslatedString('javascript.js_split_south_laser.validator.fail_print_minus_1'));
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, [
      "apples",
      "Ability",
    ]);

    if (!result.stdout || result.stdout.trim() !== "1") {
      helper.fail(helper.world.getTranslatedString('javascript.js_split_south_laser.validator.fail_print_1'));
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, [
      "apples",
      "APPleS",
    ]);

    if (!result.stdout || result.stdout.trim() !== "0") {
      helper.fail(helper.world.getTranslatedString('javascript.js_split_south_laser.validator.fail_print_0'));
      return;
    }

    helper.success(helper.world.getTranslatedString('javascript.js_split_south_laser.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.fizzBuzz.validator.error.executingJS')} <br/><br/>
      ${e}
    `);
  }
};
