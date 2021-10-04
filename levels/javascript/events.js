const merge = require("lodash.merge");
const { WORLD_STATE_KEY } = require("../../scripts/config");
const handleGeniusBar = require("./events/handleGeniusBar");
const handleDoorControls = require("./events/handleDoorControls");
const {
  processLaserEvents,
  renderLaserState,
  areAllLasersEnabled,
} = require("./events/lasers");
const { scheduleSummonAnim } = require("./events/summons");

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
  eastWing: {
    showedNoInfiniteLoopMessage: false,
  },
  northWing: {
    summonAnimStarted: false,
    summonAnimFinished: false,
    hadSavedConversation: false,
    hadIntroConversation: false,
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

  if (
    !worldState.northWing.summonAnimStarted &&
    world.isObjectiveCompleted("instantiation") &&
    world.isObjectiveCompleted("classes") &&
    event.name === "objectiveDidClose"
  ) {
    scheduleSummonAnim(world, worldState);
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

    if (
      event.target.key === "airLockTrigger" &&
      !worldState.eastWing.showedNoInfiniteLoopMessage
    ) {
      world.forEachEntities("airLockViewpoint", async (viewpoint) => {
        worldState.eastWing.showedNoInfiniteLoopMessage = true;

        world.disablePlayerMovement();

        await world.tweenCameraToPosition({
          x: viewpoint.startX,
          y: viewpoint.startY,
        });

        world.showNotification(`
          The science vessel the "Infinite Loop" should've been docked right here! I must need to <span class=\"highlight\">wait for a new game update</span> to finish saving this scientist.
        `);

        await world.wait(3000);
        await world.tweenCameraToPlayer();

        world.enablePlayerMovement();
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
