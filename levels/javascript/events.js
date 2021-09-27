const { WORLD_STATE_KEY } = require("../../scripts/config");
const handleGeniusBar = require("./events/handleGeniusBar");
const handleDoorControls = require("./events/handleDoorControls");
const { processLaserEvents, renderLaserState } = require("./events/lasers");
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
  room1_split: {
    lasers: {
      north: false,
      south: false,
      east: false,
      west: false,
    },
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

  if (
    event.name === "objectiveCompletedAgain" ||
    event.name === "objectiveCompleted"
  ) {
    processLaserEvents(event, worldState);
  }

  renderLaserState(world, worldState, event);

  // TODO:
  // handle getting the note
  // turning the laser on
  // showing the laser off initially
  // playing the explosion cinematic
  // transitioning to the split version of the wing
  // updating decontamination to link here after explosion
  // test this whole sequence

  console.log(worldState);

  world.setState(WORLD_STATE_KEY, worldState);
};
