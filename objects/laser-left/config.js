module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
      frameRate: 6,
    },
  },
  spriteSheets: {
    twilioquestLaserLeftActive: {
      fileName: "CrystalLaserHorizontal.png",
      frameDimensions: {
        width: 96,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestLaserLeftActive",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};