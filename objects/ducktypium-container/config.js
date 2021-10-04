module.exports = {
  animations: {
    idle: {
      frames: [10, 11, 12, 13, 14, 15],
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
      defaultFrameIndex: 10,
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
