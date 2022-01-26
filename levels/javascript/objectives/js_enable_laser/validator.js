module.exports = async (helper) => {
  try {
    const { laserPassword } = helper.validationFields;
    const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;

    // The player needs to find the password first
    if (!TQ_JAVASCRIPT_WORLD_STATE.room1.passwordFound) {
      return helper.fail(helper.world.getTranslatedString('javascript.js_enable_laser.validator.error.reboot'));
    }

    if (!laserPassword || laserPassword.trim() !== "PEW PEW PEW!") {
      return helper.fail(helper.world.getTranslatedString('javascript.js_enable_laser.validator.error.password'));
    }

    helper.success(helper.world.getTranslatedString('javascript.js_enable_laser.validator.success'));
  } catch (e) {
    helper.fail(helper.world.getTranslatedString('javascript.js_enable_laser.validator.error.processing'));
  }
};
