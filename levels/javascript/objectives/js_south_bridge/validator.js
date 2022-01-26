const path = require("path");
const jetpack = require("fs-jetpack");
const {
  executeCodeString,
} = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "shouldWater.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_south_bridge.validator.error.scriptNotFound')} <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, ["0", "10"]);

    if (result.stdout && result.stdout.trim() !== "") {
      helper.fail(helper.world.getTranslatedString('javascript.js_south_bridge.validator.error.notPrintSecond'));
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["1", "11"]);

    if (result.stdout && result.stdout.trim() !== "") {
      helper.fail(helper.world.getTranslatedString('javascript.js_south_bridge.validator.error.notPrintFirst'));
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["0", "11"]);

    if (!result.stdout || !result.stdout.toLowerCase().includes("water")) {
      helper.fail(helper.world.getTranslatedString('javascript.js_south_bridge.validator.error.printWater'));
      return;
    }

    helper.success(helper.world.getTranslatedString('javascript.js_south_bridge.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.fizzBuzz.validator.error.executingJS')} <br/><br/>
      ${e}
    `);
  }
};
