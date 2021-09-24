module.exports = {
  properties: {
    sprite: {
      defaultFrameIndex: 1401,
      spriteSheet: "TwilioQuestTileset",
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.sprite.alpha = 0;

      // Move this object to the "ui" group so that
      // it lays on top of everything in the scene.
      const [cleaningEffect] = world.entityService.removeAll(
        (entity) => entity.instance.key === "cleaningEffect"
      );

      world.entityService.registerEntity({
        instance: cleaningEffect.instance,
        group: "ui",
      });
    },
  },
};
