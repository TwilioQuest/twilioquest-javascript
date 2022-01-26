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
      "divideByTwo.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.js_basics_cli_args.validator.error.scriptNotFound')}
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    const { stdout } = await executeCodeString(TQ_NODE_EXE, userCode, ["128"]);

    if (!stdout.includes("64")) {
      helper.fail(helper.world.getTranslatedString('javascript.js_basics_cli_args.validator.error.didNotPrint'));
      return;
    }

    helper.success(helper.world.getTranslatedString('javascript.js_basics_cli_args.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.fizzBuzz.validator.error.executingJS')} <br/><br/>
      ${e}
    `);
  }
};
