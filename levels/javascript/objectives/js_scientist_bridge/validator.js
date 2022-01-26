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
      "enhancedLifeDetector.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_scientist_bridge.validator.error.scriptNotFound')}
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, ["11"]);

    if (result.stdout && result.stdout.trim() !== "other") {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_scientist_bridge.validator.error.printOther')}<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["0"]);

    if (!result.stdout || result.stdout.trim() !== "alive") {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_scientist_bridge.validator.error.printAlive')}<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["1"]);

    if (!result.stdout || result.stdout.trim() !== "flowering") {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_scientist_bridge.validator.error.printFlowering')}<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["2"]);

    if (!result.stdout || result.stdout.trim() !== "shedding") {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_scientist_bridge.validator.error.printShedding')}<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    helper.success(helper.world.getTranslatedString('javascript.js_scientist_bridge.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.fizzBuzz.validator.error.executingJS')} <br/><br/>
      ${e}
    `);
  }
};
