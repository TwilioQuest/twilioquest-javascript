/**
 * Handle scripting and interaction for the genius bar
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
async function handleTutorial(event, world, worldState) {
  if (
    event.name === 'playerDidInteract' &&
    event.target.key === 'genius-bar'
  ) {
    world.startConversation('libation_bot', 'libation_bot.png');
  }
}

module.exports = handleTutorial;
