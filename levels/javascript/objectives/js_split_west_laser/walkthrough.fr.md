\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.beamTwoOnline \&\& worldState.beamThreeOnline \&\& worldState.beamFourOnline; %>

# Objectif Aide

\<% if (isObjectiveReady) { %>

Cette tâche nécessite tout ce que vous avez appris sur JavaScript jusqu'à présent. Les classes, les méthodes Array, et la logique booléenne sont toutes requises.

Créez un fichier appelé `ducktypium.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Dans ce fichier, vous devez créer une classe appelée `Ducktypium`. Voici un code que vous pouvez utiliser comme point de départ. La classe est déjà définie, mais ne fonctionne pas encore comme décrite dans l'objectif&nbsp;:

```js
class Ducktypium {
  constructor(color) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
```

N'oubliez pas que vous pouvez revisiter les autres ailes du labo pour mettre en pratique les compétences acquises précédemment.

Une fois que vous avez implémenté la classe `Ducktypium` comme décrite dans l'objectif, cliquez sur _HACK_ et inversez l'expérience&nbsp;! Vous en êtes capable&nbsp;!

## Liens utiles

- [JavaScript.info&nbsp;: Référence complète](https://javascript.info/)
- [Référence MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

\<% } else { %> Pour atteindre cet objectif, vous devez&nbsp;:

1. Trouver les trois scientifiques perdus
2. Utiliser leurs codes d'activation pour activer les trois autres faisceaux dans cette pièce

Explorer le reste du labo&nbsp;: chacun des scientifiques se trouve dans les zones situées au sud, à l'est et à l'ouest de la salle d'expérience principale (celle où vous vous trouvez actuellement).

Une fois les trois autres faisceaux remis en ligne, **revenez ici pour activer le faisceau final**. \<% } %>