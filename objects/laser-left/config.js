module.exports = {
  animations: {
    idle: {
      frames: [8, 9, 10, 11, 12, 13, 14, 15],
      frameRate: 8,
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
