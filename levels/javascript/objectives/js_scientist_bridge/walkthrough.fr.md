# Ramifiez votre code, ou Else&nbsp;!

L'objectif de cet exercice est d'apprendre à utiliser une [instruction else-if](https://javascript.info/ifelse#several-conditions-else-if). Vous utilisez ces instructions lorsque votre logique conditionnelle doit se ramifier à l'une des nombreuses directions différentes.

[En savoir plus sur le fonctionnement d'une instruction else-if sur MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Voici un exemple rapide d'instruction if qui utilise else-if&nbsp;:

```js
const ninjaTurtle = 'Leonardo';

if (ninjaTurtle === 'Leonardo') {
  console.log('leads');
} else if (ninjaTurtle === 'Donatello') {
  console.log('does machines');
} else if (ninjaTurtle === 'Raphael') {
  console.log('cool, but cruel');
} else if (ninjaTurtle === 'Michelangelo') {
  console.log('party dude');
} else {
  console.log('not a ninja turtle');
}
```

Dans cet exemple, une chaîne différente est imprimée en fonction de la valeur actuelle de la variable `ninjaTurtle`.

## Réparer le Tree Life Detector (détecteur de vie des arbres)

Pour étendre le pont, vous devez créer un fichier appelé `enhancedLifeDetector.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Vous devrez utiliser un [argument de ligne de commande](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/), un chiffre unique qui indique si un arbre est vivant ou dans un autre état.

Voici un code que vous pouvez utiliser comme point de départ. Il obtient la valeur du premier argument transmis à votre script.

```js
// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

```

Pour tester le code ci-dessus, exécutez-le comme suit. La condition suivante doit imprimer la chaîne `flowering`&nbsp;:

```bash
node enhancedLifeDetector.js 1
```

Cette condition doit imprimer le texte `other`&nbsp;:

```bash
node enhancedLifeDetector.js 3
```

Les autres états potentiels, par numéro, sont répertoriés dans le tableau de l'onglet **Objectif**.

Une fois que votre script fonctionne comme décrit dans l'objectif, cliquez sur *HACK* pour valider votre travail&nbsp;!

## Ressources utiles

* [Introduction MDN aux conditionnels](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info&nbsp;: instruction else-if](https://javascript.info/ifelse#several-conditions-else-if)