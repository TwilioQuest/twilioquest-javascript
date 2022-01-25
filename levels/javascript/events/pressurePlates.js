const renderPressurePlates = (event, world, worldState) => {
  if (event.name === "mapDidLoad") {
    // Pressure plates should always render underneath the player
    // so we'll set their body heights to 0.
    world.forEachEntities(
      (entity) =>
        entity &&
        entity.instance &&
        entity.instance.key &&
        entity.instance.key.includes("Plate"),
      (plate) => {
        plate.sprite.body.height = 0;
      }
    );
  }

  if (event.name === "triggerAreaWasEntered") {
    // loopRightTrigger is on green plates
    if (event.target.key === "loopRightTrigger") {
      world.showEntities("greenPlate-down");
      world.hideEntities("greenPlate-up");
      world.hideEntities("redPlate-down");
      world.showEntities("redPlate-up");
    }

    // loopLeftTrigger is on red plates
    if (event.target.key === "loopLeftTrigger") {
      world.hideEntities("greenPlate-down");
      world.showEntities("greenPlate-up");
      world.showEntities("redPlate-down");
      world.hideEntities("redPlate-up");
    }
  }

  if (event.name === "triggerAreaWasExited") {
    world.hideEntities("greenPlate-down");
    world.showEntities("greenPlate-up");
    world.hideEntities("redPlate-down");
    world.showEntities("redPlate-up");
  }
};

module.exports = {
  renderPressurePlates,
};
