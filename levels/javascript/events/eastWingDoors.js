const isDoorFrame = (lockedStatus) => (entity) => {
  if (!entity.instance.key) {
    return false;
  }

  const { key } = entity.instance;

  const isDoorFrame = key.includes("doorFrame");

  // We need to proceed check with an underscore to ensure
  // that doors with "unlocked" do not incorrectly match
  // doors looking for "locked".
  const isLockedStatus = key.includes(`_${lockedStatus}`);

  return isDoorFrame && isLockedStatus;
};

const isLockedDoorFrame = isDoorFrame("locked");
const isUnLockedDoorFrame = isDoorFrame("unlocked");

const isDoor = (entity) => {
  if (!entity.instance.key) {
    return false;
  }

  const { key } = entity.instance;

  return key.includes("door_");
};

function renderDoors(world, worldState) {
  const { indexCounter } = worldState.eastWing;

  // Hide all doorFrames
  world.hideEntities(isUnLockedDoorFrame);
  world.showEntities(isLockedDoorFrame);
  world.showEntities(isDoor);

  // Show doorframe that matches our current index
  world.showEntities(`doorFrame${indexCounter}_unlocked`);
  world.hideEntities(`doorFrame${indexCounter}_locked`);
  world.hideEntities(`door_${indexCounter}`);

  // Open airlocks and doors for appropriate objectives
  if (world.isObjectiveCompleted("arrays")) {
    world.hideEntities("airlock_arrays");
  }

  if (world.isObjectiveCompleted("arrays2")) {
    world.hideEntities("airlock_arrays2");
  }

  if (world.isObjectiveCompleted("arrayFunctions")) {
    world.showEntities("doorFrameArrayFunctions_unlocked");
    world.hideEntities("doorFrameArrayFunctions_locked");
    world.hideEntities("door_arrayFunctions");
  }

  if (world.isObjectiveCompleted("freighterFinalPuzzle")) {
    world.showEntities("doorFrameFinal_unlocked");
    world.hideEntities("doorFrameFinal_locked");
    world.hideEntities("door_final");
  }
}

function fixDoorWallDepthSorting(event, world) {
  if (event.name === "mapDidLoad") {
    world.forEachEntities(
      "doorWallBackingTop",
      // Use the depth sorting hack from the Open Source
      // extension to ensure these wall tiles always render
      // above the player. They also will render below the
      // overlapping doorFrame objects.
      (wall) => (wall.sprite.body.height = wall.sprite.body.height * 2)
    );
  }
}

module.exports = {
  renderDoors,
  fixDoorWallDepthSorting,
};
