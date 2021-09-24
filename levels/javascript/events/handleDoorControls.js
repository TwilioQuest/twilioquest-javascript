/**
 * Handle interaction for doors in the level
 *
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
async function handleDoorControls(event, world, worldState) {
  if (event.name === "mapDidLoad" || event.name === "levelDidLoad") {
    // Reset state when we revisit this map
    worldState.decontamination = {
      areaEntered: "",
      areaLastEntered: "",
      cleaned: "",
    };
  }

  const isLowerDoorObjectiveCompleted =
    world.isObjectiveCompleted("js_node_env_setup");
  const isUpperDoorObjectiveCompleted =
    world.isObjectiveCompleted("js_node_workspace");

  if (event.name === "triggerAreaWasEntered") {
    worldState.decontamination.areaLastEntered =
      worldState.decontamination.areaEntered;

    worldState.decontamination.areaEntered = event.target.key;

    if (event.target.key !== "triggerDecontaminationMiddle") {
      // Reset cleaned status once we enter a different
      // trigger area.
      worldState.decontamination.cleaned = false;
    }
  }

  // Resolve door states
  if (
    // Only let the player in the first time once they've beaten the
    // first objective
    isLowerDoorObjectiveCompleted &&
    worldState.decontamination.areaEntered === "triggerDecontaminationLower"
  ) {
    openDoors(world, "lowerDoor");
  }

  if (
    worldState.decontamination.areaEntered === "triggerDecontaminationUpper"
  ) {
    openDoors(world, "upperDoor");
  }

  if (
    // Only let the start cleaning animation once they've beaten the
    // second objective and if we haven't already cleaned for this
    // instance of entering the middle
    isUpperDoorObjectiveCompleted &&
    !worldState.decontamination.cleaned &&
    worldState.decontamination.areaEntered === "triggerDecontaminationMiddle"
  ) {
    closeDoors(world, "lowerDoor");
    closeDoors(world, "upperDoor");

    worldState.decontamination.cleaned = true;

    // Play cleaning animation
    let pulseTween;

    world.forEachEntities("cleaningEffect", (cleaningEffect) => {
      pulseTween = applyPulseTween(
        world.__internals.level.game,
        cleaningEffect.sprite
      );
    });

    setTimeout(() => {
      pulseTween.stop();
      world.forEachEntities("cleaningEffect", (cleaningEffect) => {
        cleaningEffect.sprite.alpha = 0;
      });

      // Open opposite door from last entered
      switch (worldState.decontamination.areaLastEntered) {
        case "triggerDecontaminationLower":
          openDoors(world, "upperDoor");
          break;
        case "triggerDecontaminationUpper":
          openDoors(world, "lowerDoor");
          break;
        default:
          console.log("trigger area middle shouldn't have been last entered");
          break;
      }
    }, 5000);
  }
}

function openDoors(world, key) {
  world.forEachEntities(key, (door) => {
    if (door.state.current !== "closed") {
      // We can only open if we're in a closed state
      return;
    }

    door.state.current = "opening";
    door.playAnimation("open").then(() => {
      door.state.current = "open";
      door.hide();
    });
  });
}

function closeDoors(world, key) {
  world.forEachEntities(key, (door) => {
    if (door.state.current !== "open") {
      // We can only open if we're in a closed state
      return;
    }

    door.state.current = "closing";
    door.show();
    door.playAnimation("close").then(() => {
      door.state.current = "closed";
    });
  });
}

function applyPulseTween(game, sprite) {
  const tween = game.add.tween(sprite).to(
    {
      alpha: 0.6,
    },
    400, // time
    Phaser.Easing.Exponential.In,
    undefined,
    1000, // delay
    -1, // repeat infinitely
    true // yoyo)
  );

  tween.start();

  return tween;
}

module.exports = handleDoorControls;
