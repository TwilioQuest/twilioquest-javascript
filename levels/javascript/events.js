const handleGeniusBar = require("./events/handleGeniusBar");
const handleDoorControls = require("./events/handleDoorControls");
const { WORLD_STATE_KEY } = require("../../scripts/config");
const merge = require("lodash.merge");

const INITIAL_STATE = {
  accessLevels: {},
  decontamination: {
    areaEntered: "",
  },
  room1: {
    passwordFound: false,
    explosionTriggered: false,
    jsEnableLaserFinished: false,
  },
};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (event.name === "playerDidInteract") {
    if (event.target.stasisBeamPassword) {
      worldState.room1.passwordFound = true;
    }
  }

  // Handle first run experience aboard Fog Owl
  handleGeniusBar(event, world, worldState);

  // Handle door controls
  handleDoorControls(event, world, worldState);

  console.log(worldState);

  world.setState(WORLD_STATE_KEY, worldState);
};
