const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  spriteSheets: {
    twilioQuestJavaScriptScientists: {
      fileName: "NPC_Scientists.png",
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestJavaScriptScientists",
      layers: [],
    },
  },
};
