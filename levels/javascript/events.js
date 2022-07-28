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
const updateQuestLogWhenComplete = require("./events/updateQuestLogWhenComplete");
const {
  incrementIndexNumber,
  decrementIndexNumber,
  displayIndexNumber,
} = require("./events/indexDisplay");
const packageInfo = require("../../package.json");
const { renderPressurePlates } = require("./events/pressurePlates");
const {
  renderDoors,
  fixDoorWallDepthSorting,
} = require("./events/eastWingDoors");
const { processEastWingEvents } = require("./events/eastWing");
const { updateLayerState, renderLayers } = require("./events/layers");

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
  layers: { current: "upper", lastTriggerEntered: "layerTriggerUpper" },
  southWing: {
    hadIntroConversation: false,
    hadSavedConversation: false,
  },
  eastWing: {
    showedNoInfiniteLoopMessage: false,
    lastEnteredLoopTrigger: null,
    indexCounter: 0,
  },
  northWing: {
    summonAnimStarted: false,
    summonAnimFinished: false,
    hadSavedConversation: false,
    hadIntroConversation: false,
  },
};

function areAllLasersUnlocked(worldState) {
  return Object.values(worldState.room1_split.lasers).every((isOn) => isOn);
}

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
    !worldState.northWing.summonAnimFinished &&
    world.isObjectiveCompleted("instantiation") &&
    world.isObjectiveCompleted("classes") &&
    event.name === "objectiveDidClose"
  ) {
    scheduleSummonAnim(world, worldState);
  }

  if (event.name === "mapDidLoad") {
    if (worldState.northWing.summonAnimFinished) {
      world.showEntities("physicist");
    }
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

    // Is this a different trigger area than was previously entered?
    if (
      event.target.key === "loopRightTrigger" ||
      event.target.key === "loopLeftTrigger"
    ) {
      if (
        worldState.eastWing.lastEnteredLoopTrigger &&
        event.target.key !== worldState.eastWing.lastEnteredLoopTrigger
      ) {
        if (event.target.key === "loopRightTrigger") {
          // previous trigger was left, so we're moving L -> R, counterclockwise
          decrementIndexNumber(worldState);
          worldState.eastWing.lastEnteredLoopTrigger = null;
        }

        if (event.target.key === "loopLeftTrigger") {
          // previous trigger was right, so we're moving R -> L, clockwise
          incrementIndexNumber(worldState);
          worldState.eastWing.lastEnteredLoopTrigger = null;
        }
      } else {
        // track latest entered trigger area
        worldState.eastWing.lastEnteredLoopTrigger = event.target.key;
      }
    }
  }

  renderPressurePlates(event, world, worldState);

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

  updateQuestLogWhenComplete({
    notification:
      'I\'ve completed everything in the <span class="highlight">JavaScript Test Lab</span> for now!',
    log: "I've completed everything in the JavaScript Test Lab for now!",
    event,
    world,
    worldStateKey: WORLD_STATE_KEY,
    version: packageInfo.version,
  });

  displayIndexNumber(world, worldState);

  updateLayerState(event, world, worldState);
  renderLayers(world, worldState);

  processEastWingEvents(event, world, worldState);
  fixDoorWallDepthSorting(event, world);
  renderDoors(world, worldState);

  if (areAllLasersUnlocked(worldState)) {
    // update transition areas
    // from default room to room1
    world.disableTransitionAreas("exit-default-room1");
    world.disableTransitionAreas("exit-default-room1-split");
    world.enableTransitionAreas("exit-default-room1-final");

    // from east wing to room1
    world.disableTransitionAreas("exit-east-wing-ducktypium-split");
    world.enableTransitionAreas("exit-east-wing-ducktypium-final");

    // from north wing to room1
    world.disableTransitionAreas("exit-north-wing-ducktypium-split");
    world.enableTransitionAreas("exit-north-wing-ducktypium-final");

    // move north wing scientist to office
    world.destroyEntities("physicist");

    // update freighter scientist to final dialog
    world.destroyEntities("scientist3");

    if (world.getCurrentMapName() === "ducktypium-wing-split") {
      // This is a temporary warp only, we will also need to track this in a
      // permanent state object in the shipped version
      world.setContext({
        currentLevel: {
          levelName: "javascript",
          playerEntryPoint: "player_entry2",
          levelMapName: "ducktypium-wing-final",
        },
      });
    }
  }

  world.setState(WORLD_STATE_KEY, worldState);
};
