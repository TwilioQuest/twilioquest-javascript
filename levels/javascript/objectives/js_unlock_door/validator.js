const path = require("path");
const jetpack = require("fs-jetpack");
const {
  executeCodeString,
} = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, "sayPlease.js");

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(helper.world.getTranslatedString('javascript.js_unlock_door.validator.fail'));
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    const { stdout } = await executeCodeString(TQ_NODE_EXE, userCode);

    if (!stdout.includes("please")) {
      helper.fail(helper.world.getTranslatedString('javascript.js_unlock_door.validator.fail_please'));
      return;
    }

    helper.success(helper.world.getTranslatedString('javascript.js_unlock_door.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.fizzBuzz.validator.error.executingJS')} <br/><br/>
      ${e}
    `);
  }
};
