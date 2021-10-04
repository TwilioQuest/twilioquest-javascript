module.exports = {
  animations: {
    idle: {
      frames: [20, 21, 22, 23],
      frameRate: 6,
    },
  },
  spriteSheets: {
    twilioquestDucktypiumContainer: {
      fileName: "WaterTank.png",
      frameDimensions: {
        width: 24,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 20,
      spriteSheet: "twilioquestDucktypiumContainer",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
