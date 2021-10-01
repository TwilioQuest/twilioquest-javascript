const { WORLD_STATE_KEY } = require("../../scripts/config");
const handleGeniusBar = require("./events/handleGeniusBar");
const handleDoorControls = require("./events/handleDoorControls");
const {
  processLaserEvents,
  renderLaserState,
  areAllLasersEnabled,
} = require("./events/lasers");
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
  southWing: {
    hadIntroConversation: false,
    hadSavedConversation: false,
  },
};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (areAllLasersEnabled(worldState)) {
    world.disableTransitionAreas("exit-default-room1");
    world.disableTransitionAreas("exit-default-room1-split");
    world.enableTransitionAreas("exit-default-room1-final");
  } else if (worldState.room1.explosionTriggered) {
    world.disableTransitionAreas("exit-default-room1");
    world.enableTransitionAreas("exit-default-room1-split");
    world.disableTransitionAreas("exit-default-room1-final");
  } else {
    world.enableTransitionAreas("exit-default-room1");
    world.disableTransitionAreas("exit-default-room1-split");
    world.disableTransitionAreas("exit-default-room1-final");
  }

  if (event.name === "playerDidInteract") {
    if (event.target.stasisBeamPassword) {
      worldState.room1.passwordFound = true;
    }
  }

  if (event.name === "triggerAreaWasEntered") {
    if (
      event.target.key === "botanistDialogTrigger" &&
      !worldState.southWing.hadSavedConversation
    ) {
      world.forEachEntities("botanistViewpoint", async (viewpoint) => {
        world.disablePlayerMovement();

        await world.tweenCameraToPosition({
          x: viewpoint.startX,
          y: viewpoint.startY,
        });

        world.startConversation("botanist_distant", "scientist2.png");
      });
    }
  }

  if (
    event.name === "conversationDidEnd" &&
    event.npc.conversation === "botanist_distant"
  ) {
    (async function () {
      await world.tweenCameraToPlayer();
      world.enablePlayerMovement();
    })();
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
  // updating decontamination to link here after explosion
  // test this whole sequence

  world.setState(WORLD_STATE_KEY, worldState);
};
