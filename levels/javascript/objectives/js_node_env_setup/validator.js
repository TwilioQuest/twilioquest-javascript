const { spawn } = require('child_process');

module.exports = async helper => {
  try {
    const { nodePath } = helper.validationFields;

    const args = ['--version'];
    const [isExecutableValid, errorMessage] = await helper.isExecutableValid(
      nodePath,
      args
    );

    if (!isExecutableValid) {
      helper.fail(errorMessage);
      return;
    }

    const nodeVersion = spawn(nodePath, args);
    let versionString = '';
    nodeVersion.stdout.on('data', data => {
      versionString += `${data}`;
    });

    nodeVersion.on('close', code => {
      if (code === 0) {
        helper.success(
          helper.world.getTranslatedString('javascript.js_node_env_setup.validator.success', { versionString }),
          [{ name: 'NODE_EXE', value: nodePath }]
        );
        
      } else {
        helper.fail(helper.world.getTranslatedString('javascript.js_node_env_setup.validator.error.checkPath'));
      }
    });
  } catch (e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('javascript.js_node_env_setup.validator.error.nodeInstallation'));
    }
  }
};
