const commandExists = require('command-exists');
const path = require('path');
const jetpack = require('fs-jetpack');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;

    try {
      await commandExists('git');
    } catch (err) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.repo.validator.error.gitNotFound')}

        ${err}
      `);
      return;
    }

    const gitDirPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, '.git');
    const gitRepoExists = await jetpack.existsAsync(gitDirPath);

    if (gitRepoExists !== 'dir') {
      helper.fail(
        `${helper.world.getTranslatedString('javascript.repo.validator.error.gitDirectoryNotFound')} -> ${gitDirPath}`
      );
      return;
    }

    const gitStatus = await exec(`git status`, {
      cwd: TQ_JAVASCRIPT_WORKSPACE_PATH,
    });

    const status = gitStatus.stdout;

    if (status.includes('No commits yet')) {
      helper.fail(helper.world.getTranslatedString('javascript.repo.validator.error.gitInitialCommit'));
      return;
    }

    helper.success(helper.world.getTranslatedString('javascript.repo.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.repo.validator.error.validateRepo')}

      ${e}
    `);
  }
};
