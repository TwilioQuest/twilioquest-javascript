\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.southWing \&\& worldState.southWing.hadSavedConversation; %>

# Redémarrer le laser

\<% if (isObjectiveReady) { %>

Après avoir découvert la logique conditionnelle dans l'aile sud, vous êtes prêt à relever ce défi&nbsp;! Créez un fichier nommé `sortOrder.js` dans votre dossier de code, situé ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Utilisez le code suivant comme point de départ&nbsp;:

```js
const firstValue = process.argv[2];
const secondValue = process.argv[3];

// Your comparison code (if statements) go here
```

Votre code devra imprimer l'un des trois nombres, selon que la première valeur est antérieure, identique ou postérieure à la deuxième valeur par ordre alphabétique. Si votre script a été exécuté comme suit&nbsp;:

```bash
node sortOrder.js cats dogs
```

Il doit s'imprimer `-1`, car `cats` précède `dogs` par ordre alphabétique. S'il a été exécuté comme suit&nbsp;:

```bash
node sortOrder.js cats CATS
```

Il doit imprimer `0`, car les chaînes `cats` et `CATS` sont équivalentes par ordre alphabétique. Enfin, s'il a été exécuté comme suit&nbsp;:

```bash
node sortOrder.js dogs cats
```

Il doit imprimer `1`, car `dogs` vient après `cats` par ordre alphabétique.

Votre code devra [comparer les chaînes par ordre alphabétique, comme illustré ici](https://javascript.info/comparison#string-comparison). De plus, vous devrez peut-être convertir les chaînes dans la même casse avant la comparaison à l'aide de [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

Ce code doit être très similaire à celui des tâches effectuées dans l'aile sud du labo. En cas de besoin, revenez en arrière et vérifiez ce code.

Lorsque votre script se comporte comme décrit dans l'objectif, cliquez sur _HACK_. Vous en êtes capable&nbsp;!

## Ressources utiles

- [Référence aux conditions MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [JavaScript.info&nbsp;: Comparaison de chaînes](https://javascript.info/comparison#string-comparison)

\<% } else { %>

Vous examinez les commandes de ce laser de stase, mais elles sont actuellement verrouillées. Vous aurez besoin du **code d'accès du botaniste** pour activer ce laser.

Le botaniste se trouve probablement dans l'**aile sud** du labo, où il étudiait l'effet du ducktypium sur les végétaux.

**Parlez au botaniste** pour recevoir le code d'accès pour ce faisceau.

\<% } %>