module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestLaserUpActive: {
      fileName: "LaserVertical_Up.png",
      frameDimensions: {
        width: 24,
        height: 120,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestLaserUpActive",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
