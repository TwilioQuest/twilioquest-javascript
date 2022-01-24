function updateLayerState(event, world, worldState) {
  if (
    event.name === "triggerAreaWasEntered" ||
    event.name === "triggerAreaWasExited"
  ) {
    if (event.target.key === "upperSpawnTrigger") {
      worldState.layers.current = "upper";
      worldState.layers.lastTriggerEntered = "layerTriggerUpper";
    }

    if (event.target.key === "lowerSpawnTrigger") {
      worldState.layers.current = "lower";
      worldState.layers.lastTriggerEntered = "layerTriggerLower";
    }
  }

  if (event.name === "triggerAreaWasEntered") {
    if (
      event.target.key === "layerTriggerUpper" ||
      event.target.key === "layerTriggerLower"
    ) {
      if (
        event.target.key === "layerTriggerUpper" &&
        worldState.layers.lastTriggerEntered === "layerTriggerLower"
      ) {
        worldState.layers.current = "upper";
      }

      if (
        event.target.key === "layerTriggerLower" &&
        worldState.layers.lastTriggerEntered === "layerTriggerUpper"
      ) {
        worldState.layers.current = "lower";
      }

      // track last entered entered trigger area
      worldState.layers.lastTriggerEntered = event.target.key;
    }
  }
}

function renderLayers(world, worldState) {
  // show/hide layered objects
  if (worldState.layers.current === "lower") {
    world.hideEntities("upperLayer-colliders");
    world.showEntities("lowerLayer-colliders");

    world.forEachEntities("upperLayer-floor", (entity) => {
      // Set height to mapHeight so entity is always sorted above player
      entity.sprite.body.height = world.__internals.level.map.heightInPixels;
      // I'm not sure why we need to set this here.
      // All of these entities should have disableBody set already.
      entity.sprite.body.enable = false;
    });
  }

  if (worldState.layers.current === "upper") {
    world.showEntities("upperLayer-colliders");
    world.hideEntities("lowerLayer-colliders");

    world.forEachEntities("upperLayer-floor", (entity) => {
      // Set height to 0 so entity is always sorted below player
      entity.sprite.body.height = 0;
      // I'm not sure why we need to set this here.
      // All of these entities should have disableBody set already.
      entity.sprite.body.enable = false;
    });
  }
}

module.exports = { renderLayers, updateLayerState };
