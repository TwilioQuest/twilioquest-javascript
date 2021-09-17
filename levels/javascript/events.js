const handleGeniusBar = require('./events/handleGeniusBar');
const { WORLD_STATE_KEY } = require('../../scripts/config');

module.exports = function(event, world) {
  const worldState = world.getState(WORLD_STATE_KEY) || {};
  
  // Handle first run experience aboard Fog Owl
  handleGeniusBar(event, world, worldState);

  world.setState(WORLD_STATE_KEY, worldState);
};
