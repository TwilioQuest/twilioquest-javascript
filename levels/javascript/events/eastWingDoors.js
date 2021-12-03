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

function renderDoors(world, worldState) {
  const { indexCounter } = worldState.eastWing;

  // Hide all doorFrames
  world.hideEntities(isUnLockedDoorFrame);
  world.showEntities(isLockedDoorFrame);

  // Show doorframe that matches our current index
  world.showEntities(`doorFrame${indexCounter}_unlocked`);
  world.hideEntities(`doorFrame${indexCounter}_locked`);
}

function fixDoorWallDepthSorting(event, world) {
  // TODO:
  // This doesn't work, and it's worse that the other
  // version of just plain TileObjects. Going
  // to leave this here for now.
  // if (event.name === "mapDidLoad") {
  //   world.forEachEntities(
  //     "doorWallBacking",
  //     // Use the depth sorting hack from the Open Source
  //     // extension to ensure these wall tiles always render
  //     // above the player.
  //     (wall) =>
  //       (wall.sprite.body.height = world.__internals.level.map.heightInPixels)
  //   );
  // }
}

module.exports = {
  renderDoors,
  fixDoorWallDepthSorting,
};
