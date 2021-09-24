const handleGeniusBar = require("./events/handleGeniusBar");
const handleDoorControls = require("./events/handleDoorControls");
const { WORLD_STATE_KEY } = require("../../scripts/config");

const INITIAL_STATE = {
  accessLevels: {},
  decontamination: {
    areaEntered: "",
  },
};

module.exports = function (event, world) {
  const worldState = world.getState(WORLD_STATE_KEY) || INITIAL_STATE;

  // Handle first run experience aboard Fog Owl
  handleGeniusBar(event, world, worldState);

  // Handle door controls
  handleDoorControls(event, world, worldState);

  console.log(worldState);

  world.setState(WORLD_STATE_KEY, worldState);
};
