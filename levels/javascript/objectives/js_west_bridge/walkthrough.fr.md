# Ramifiez votre code, ou Else&nbsp;!

L'objectif de cet exercice est d'apprendre à utiliser une instruction[ ELSE](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals). Auparavant, vous avez utilisé une instruction[ IF](https://javascript.info/ifelse#the-if-statement) pour définir un bloc de code qui s'exécute si une certaine condition est remplie. Une instruction `else` vous permet de définir un code qui s'exécute dans n'importe quel autre cas.

[Apprenez-en plus sur le fonctionnement d'une instruction IF/ELSE sur MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Voici un bref exemple d'une instruction IF comportant une clause `else`&nbsp;:

```js
const luckyNumber = 7;

if (luckyNumber === 7) {
  console.log('Yup, 7 is a lucky number.');
} else {
  console.log('I think only 7 is a lucky number, right?');
}
```

Dans cet exemple, la deuxième chaîne de caractères est imprimée si `luckyNumber` est défini sur un nombre autre que `7`.

## Réparez le détecteur de vie des arbres (Tree Life Detector)

Pour étendre le pont, vous devez créer un fichier appelé `treeLifeDetector.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Vous devrez utiliser un [argument de ligne de commande](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/), un chiffre unique qui indique si un arbre est vivant ou dans un autre état.

Voici un code que vous pouvez utiliser comme point de départ. Il obtient la valeur du premier argument transmis à votre script.

```js
// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

```

Pour tester le code ci-dessus, exécutez-le comme suit. La condition suivante doit rendrela chaîne `alive`&nbsp;:

```bash
node treeLifeDetector.js 0
```

Cette condition doit afficherr le texte `other`&nbsp;:

```bash
node treeLifeDetector.js 3
```

Une fois que votre script fonctionne comme décrit dans l'objectif, cliquez sur *HACK* pour valider votre travail&nbsp;!

## Ressources utiles

* [Introduction MDN aux conditions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - Déclaration Else](https://javascript.info/ifelse#the-else-clause)
* [MDN&nbsp;: Types de données JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)