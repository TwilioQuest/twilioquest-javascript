function applyPulseTween(game, sprite) {
  const tween = game.add.tween(sprite).to(
    {
      alpha: 0.5,
    },
    1200, // time
    Phaser.Easing.Exponential.InOut,
    undefined,
    1000, // delay
    -1, // repeat infinitely
    true // yoyo)
  );

  tween.start();

  return tween;
}

const checkObjectiveCompletion = (self, event, world) => {
  if (self.objectiveName === event.objective) {
    self.setState({ isCompleted: true });
  }
};

module.exports = {
  properties: {
    sprite: {
      defaultFrameIndex: 1401,
      spriteSheet: "TwilioQuestTileset",
      layers: [],
    },
  },
  state: {
    isCompleted: false,
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.sprite.alpha = 0.6;

      // Set body height to zero so that it always
      // visually sorts underneath the player.
      self.sprite.body.height = 0;

      self.hide();

      self.setState({
        isCompleted: world.isObjectiveCompleted(self.objectiveName),
      });
    },
    onObjectiveCompleted: checkObjectiveCompletion,
    onObjectiveCompletedAgain: checkObjectiveCompletion,
  },
  render: (self, world) => {
    if (self.state.isCompleted) {
      self.show();
      applyPulseTween(world.__internals.level.game, self.sprite);
    } else {
      self.hide();
    }
  },
};
