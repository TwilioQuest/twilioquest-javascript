const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {
    scientist1_idle: {
      frames: [0, 1, 2, 3],
      frameRate: 4,
    },
    scientist2_idle: {
      frames: [6, 7, 8, 9],
      frameRate: 4,
    },
    scientist3_idle: {
      frames: [12, 13, 14, 15],
      frameRate: 4,
    },
    scientist4_idle: {
      frames: [18, 19, 20, 21],
      frameRate: 4,
    },
  },
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
    onMapDidLoad: (self, event, world) => {
      const scientistFrames = {
        scientist1: 0,
        scientist2: 6,
        scientist3: 12,
        scientist4: 18,
      };

      self.sprite.frame = scientistFrames[self.scientist];

      self.createIdleAnimations({
        animations: {
          [`${self.scientist}_idle`]: 100,
        },
        minIdleTime: 2000,
        maxIdleTime: 5000,
      });
    },
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
