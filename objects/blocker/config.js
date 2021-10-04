function onObjectiveCompleted(self, event, world) {
  if (self.objectiveName !== event.objective) {
    return;
  }

  self.setState({
    isCompleted: true,
  });
}

module.exports = {
  spriteSheets: {},
  state: {
    isCompleted: false,
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.sprite.alpha = 0;

      self.setState({
        isCompleted: world.isObjectiveCompleted(self.objectiveName),
      });
    },
    onObjectiveCompleted,
    onObjectiveCompletedAgain: onObjectiveCompleted,
  },
  render: (self, world) => {
    if (self.state.isCompleted) {
      // Calling hide will disable physics body
      // even though we've manually hidden the
      // sprite.
      self.hide();
    }
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "TwilioQuestTileset",
    },
  },
};
