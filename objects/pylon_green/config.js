const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");

module.exports = {
  ...createObjectiveCompletionResponderConfig({ shouldPlayAnimations: false }),
  spriteSheets: {
    twilioQuestPylonGreen: {
      fileName: "icon.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestPylonGreen",
      layers: [],
    },
  },
};
