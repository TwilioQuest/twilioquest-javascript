function scheduleSummonAnim(world, worldState) {
  worldState.northWing.summonAnimStarted = true;

  // tween camera to viewpoint
  world.forEachEntities("physicistViewpoint", async (viewpoint) => {
    world.disablePlayerMovement();

    await world.tweenCameraToPosition({
      x: viewpoint.startX,
      y: viewpoint.startY,
    });

    world.forEachEntities("physicist", (physicist) => {
      physicist.show();
      physicist.sprite.alpha = 0;
      applyPulseTween(world.__internals.level.game, physicist.sprite);
    });

    await world.wait(3000);
    await world.tweenCameraToPlayer();

    world.enablePlayerMovement();
    worldState.northWing.summonAnimFinished = true;
  });
}

function applyPulseTween(game, sprite) {
  const tween = game.add
    .tween(sprite)
    .to(
      {
        alpha: 0.6,
      },
      400, // time
      Phaser.Easing.Exponential.In,
      undefined,
      0, // delay
      1, // repeat infinitely
      true // yoyo)
    )
    .to(
      { alpha: 1 },
      400, // time
      Phaser.Easing.Exponential.In
    );

  tween.start();

  return tween;
}

module.exports = {
  scheduleSummonAnim,
};
