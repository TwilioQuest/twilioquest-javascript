\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.eastWing \&\& worldState.eastWing.hadSavedConversation; %>

# Objectif Aide

\<% if (isObjectiveReady) { %>

Pour atteindre cet objectif, vous devrez combiner plusieurs techniques que vous avez apprises, tout en sauvant l'ingénieur électricien de la **Boucle Infinie**.

Créez un fichier appelé `laserPower.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Dans ce fichier, vous devez créer une fonction appelée `calculatePower`. Voici un code que vous pouvez utiliser comme point de départ. La fonction est déjà définie, mais ne fonctionne pas encore comme décrite dans l'objectif&nbsp;:

```js
function calculatePower(powerSettings) {
  let totalPower = 0;

  return totalPower;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower); // should be 24
```

Toutes les compétences dont vous avez besoin pour relever ce défi vous ont permis d'arriver jusqu'ici. Vous en êtes capable&nbsp;!

Une fois que votre fonction `calculatePower` fonctionne comme décrite dans l'objectif, cliquez sur le bouton _HACK_.

## Liens utiles

- [JavaScript.info&nbsp;: Fonction Array reduce](https://javascript.info/array-methods#reduce-reduceright)
- [JavaScript.info&nbsp;: Fonction Array map](https://javascript.info/array-methods#map)
- [JavaScript.info&nbsp;: Instructions if](https://javascript.info/ifelse)
- [JavaScript.info&nbsp;: Retourner des valeurs des fonctions](https://javascript.info/function-basics#returning-a-value)
- [MDN&nbsp;: Guide des fonctions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

\<% } else { %>

Vous examinez les commandes de ce laser de stase, mais elles sont actuellement verrouillées. Vous aurez besoin du **code d'accès de l'ingénieur électricien** pour activer ce laser.

L'ingénieur électricien est probablement à bord du navire d'approvisionnement amarré dans l'**aile est** du labo. Il procédait à une nouvelle expédition de marchandises lorsque l'explosion s'est produite.

**Parlez à l'ingénieur électricien** pour recevoir le code d'accès pour ce laser.

\<% } %>