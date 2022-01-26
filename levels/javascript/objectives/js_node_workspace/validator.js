const jetpack = require("fs-jetpack");
const { NiceError } = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { workspacePath } = helper.validationFields;

    if (!workspacePath) {
      throw new NiceError(`
        Please provide a path to your Node.js workspace directory!
      `);
    }

    const exists = await jetpack.existsAsync(workspacePath);
    if (!exists) {
      throw new NiceError(helper.world.getTranslatedString('javascript.js_node_workspace.validator.error.directoryNotFound'));
    }

    helper.success(
      helper.world.getTranslatedString('javascript.js_node_workspace.validator.success'),
      [
        {
          name: "JAVASCRIPT_WORKSPACE_PATH",
          value: workspacePath,
        },
      ]
    );
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('javascript.js_node_workspace.validator.error.nodeNotFound'));
    }
  }
};
