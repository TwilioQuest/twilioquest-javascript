const { WORLD_STATE_KEY } = require("../../scripts/config");

const set = (object = {}, key, value) => {
  return {
    ...object,
    [key]: value,
  };
};
const push = (array = [], value) => [...array, value];

module.exports = {
  spriteSheets: {
    twilioquestKeycardTerminal: {
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
      spriteSheet: "twilioquestKeycardTerminal",
      layers: [],
    },
  },
  events: {
    onPlayerDidInteract: (self, event, world) => {
      if (self !== event.target) {
        // Do nothing if this interaction event isn't our object
        return;
      }

      const javaScriptWorldState = world.getState(WORLD_STATE_KEY) ? 
        world.getState(WORLD_STATE_KEY) : {};
      const { accessLevels = {} } = javaScriptWorldState;

      const accessLevelState = accessLevels[self.accessLevel];
      if (!accessLevelState) {
        // Player does not have access level (or access level doesn't exist)
        world.showNotification(world.getTranslatedString('javascript.objects.keycard-terminal.accessLevel', { accessLevel: self.accessLevel }));
        return;
      }

      // Hide all entities with targetKey
      world.hideEntities(self.targetKey);

      // Mark the current targetKey as opened
      const newAccessLevelState = set(
        accessLevelState,
        push(accessLevelState.opened, self.targetKey),
        accessLevelState.opened
      );
      const newAccessLevels = set(
        accessLevels,
        self.accessLevel,
        newAccessLevelState
      );
      const newJavaScriptWorldState = set(
        javaScriptWorldState,
        "accessLevels",
        newAccessLevels
      );

      world.setState(WORLD_STATE_KEY, newJavaScriptWorldState);
    },
  },
};
