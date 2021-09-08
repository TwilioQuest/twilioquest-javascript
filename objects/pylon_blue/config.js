const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");

module.exports = {
  ...createObjectiveCompletionResponderConfig(),
  spriteSheets: {
    twilioQuestPylonBlue: {
      fileName: "icon.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestPylonBlue",
      layers: [],
    },
  },
};
