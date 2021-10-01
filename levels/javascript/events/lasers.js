function scheduleLaserExplosionTimeouts(world) {
  world.showEntities("yourLaserOn");
  world.hideEntities("yourLaserOff");

  world.forEachEntities("ducktypiumViewpoint", async (viewpoint) => {
    world.disablePlayerMovement();

    await world.tweenCameraToPosition({
      x: viewpoint.startX,
      y: viewpoint.startY,
    });

    setTimeout(() => {
      world.screenShake(6);
      world.showEntities("laser_flames_1");
    }, 1000);
    setTimeout(() => {
      world.screenShake(3);
      world.showEntities("laser_flames_2");
    }, 2000);
    setTimeout(() => {
      world.screenShake(5);
      world.showEntities("laser_flames_3");
      world.showEntities("ducktypiumReleased");
      world.hideEntities("ducktypiumContained");
    }, 2750);
    setTimeout(() => {
      // This is a temporary warp only, we will also need to track this in a
      // permanent state object in the shipped version
      world.setContext({
        currentLevel: {
          levelName: "javascript",
          playerEntryPoint: "player_entry2",
          levelMapName: "ducktypium-wing-split",
        },
      });
      world.enablePlayerMovement();
    }, 3750);
  });
}

function processLaserEvents(event, worldState) {
  if (event.objective === "js_enable_laser") {
    worldState.room1.jsEnableLaserFinished = true;
  }

  if (event.objective === "js_split_west_laser") {
    worldState.room1_split.lasers.west = true;
    worldState.beamOneOnline = true;
  }

  if (event.objective === "js_split_south_laser") {
    worldState.room1_split.lasers.south = true;
    worldState.beamTwoOnline = true;
  }

  if (event.objective === "js_split_east_laser") {
    worldState.room1_split.lasers.east = true;
    worldState.beamThreeOnline = true;
  }

  if (event.objective === "js_split_north_laser") {
    worldState.room1_split.lasers.north = true;
    worldState.beamFourOnline = true;
  }
}

function renderLaserState(world, worldState, event) {
  // Next, toggle laser visibility state
  if (
    worldState.room1.jsEnableLaserFinished &&
    !worldState.room1.explosionTriggered &&
    event.name === "objectiveDidClose"
  ) {
    worldState.room1.explosionTriggered = true;
    scheduleLaserExplosionTimeouts(world, worldState);
  }

  if (worldState.room1_split.lasers.west) {
    world.showEntities("split_west_laser");
  }

  if (worldState.room1_split.lasers.south) {
    world.showEntities("split_south_laser");
  }

  if (worldState.room1_split.lasers.east) {
    world.showEntities("split_east_laser");
  }

  if (worldState.room1_split.lasers.north) {
    world.showEntities("split_north_laser");
  }
}

function areAllLasersEnabled(worldState) {
  return (
    worldState.room1_split.lasers.north &&
    worldState.room1_split.lasers.south &&
    worldState.room1_split.lasers.east &&
    worldState.room1_split.lasers.west
  );
}

module.exports = {
  scheduleLaserExplosionTimeouts,
  processLaserEvents,
  renderLaserState,
  areAllLasersEnabled,
};
