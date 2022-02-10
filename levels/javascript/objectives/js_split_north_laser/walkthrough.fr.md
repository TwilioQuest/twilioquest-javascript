\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.northWing \&\& worldState.northWing.hadSavedConversation; %>

# Objectif Aide

\<% if (isObjectiveReady) { %>

Dans cet objectif, vous devrez combiner ce que vous avez appris sur les objets et les classes dans l'aile nord du labo pour mettre au point une solution.

Pour cet exercice, vous devez [créer une classe](https://javascript.info/class) à partir de la spécification de l'objectif.

Créez un fichier appelé `targetingSolution.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Dans ce fichier, vous devez créer une classe appelée `TargetingSolution`. Voici un code que vous pouvez utiliser comme point de départ. La classe est déjà définie, mais ne fonctionne pas encore comme décrite dans l'objectif&nbsp;:

```js
class TargetingSolution {
  constructor(config) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900,
});

console.log(m.target()); // would print "(10, 15, 900)"
```

Lorsque votre fonction fonctionne comme indiqué dans l'objectif, cliquez sur le bouton _HACK_ pour valider votre travail. Vous en êtes capable&nbsp;!

## Liens utiles

- [JavaScript.info - Classes](https://javascript.info/class)
- [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info&nbsp;: Notation littérale d'objet](https://javascript.info/object#literals-and-properties)
- [MDN&nbsp;: Initialisation d'objet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

\<% } else { %>

Vous examinez les commandes de ce laser de stase, mais elles sont actuellement verrouillées. Vous aurez besoin du **code d'accès du physicien théoricien** pour activer ce laser.

Le physicien théoricien se trouve le plus souvent dans **l'aile nord** du labo, où il étudie la capacité du ducktypium à plier l'espace-temps et à manipuler la matière.

**Parlez au physicien théoricien** pour recevoir le code d'accès pour ce laser.

\<% } %>