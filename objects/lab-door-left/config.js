module.exports = {
  spriteSheets: {
    twilioquestLeftLabDoor: {
      fileName: "LabDoor-flipped.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  animations: {
    open: {
      frames: [6, 5, 4, 3, 2, 1, 0],
      frameRate: 6,
    },
    close: {
      frames: [0, 1, 2, 3, 4, 5, 6],
      frameRate: 6,
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 6,
      spriteSheet: "twilioquestLeftLabDoor",
      layers: [],
    },
  },
  events: {
    onPlayerDidInteract: (self, event, world) => {
      if (self !== event.target) {
        // Do nothing if this interaction event isn't our object
        return;
      }
    },
  },
  state: {
    // closed, closing, open, opening
    current: "closed",
  },
};
