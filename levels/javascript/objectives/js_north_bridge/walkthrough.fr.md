# Maîtriser l'instruction IF

Ici, l'objectif est d'apprendre à exécuter le code de manière conditionnelle à l'aide d'une [instruction IF](https://javascript.info/ifelse#the-if-statement). En programmation, il est souvent préférable d'exécuter le code uniquement lorsque certaines conditions sont remplies, par exemple si un utilisateur est connecté ou si un fichier donné existe.

[Apprenez-en plus sur le fonctionnement d'une instruction IF sur MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Voici un bref exemple d'une instruction IF qui utilise l'[opérateur de comparaison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) (l'opérateur `===`) pour voir si deux chaînes de texte sont identiques et afficher un texte lorsque c'est bien le cas&nbsp;:

```js
const animal = 'Dog';

if (animal === 'Dog') {
  console.log('woof!');
}
```

Une instruction de comparaison est évaluée par une [valeur booléenne](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) `true` ou `false`. Si l'instruction est vraie, le code à l'intérieur de l'instruction IF (les parties à l'intérieur des accolades `{` `}`) est exécuté.

## Construire des ponts

Pour étendre le pont, vous devez créer un fichier appelé `northBridgeControl.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Tout comme vous l'avez fait lorsque vous avez récupéré le mot de passe dans le bureau de la scientifique en chef, vous allez devoir travailler avec des [arguments de ligne de commande](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/). Votre code affiche un message particulier si et seulement si un argument spécifique est transmis.

Voici un code que vous pouvez utiliser comme point de départ. Il obtient la valeur du premier argument transmis à votre script. Cependant, l'instruction IF **ne fonctionnera pas** telle qu'elle est écrite actuellement. Vous devrez la modifier pour remplir l'objectif.

```js
const argumentValue = process.argv[2];

// Modify the if statement below to execute if and only if "argumentValue" is
// equal to the string "EXTEND"
if (false) {
  console.log('Extending bridge!');
}
```

Vous pouvez tester le code ci-dessus en l'exécutant de la façon suivante, ce qui devrait afficher ce message&nbsp;:

```bash
node northBridgeControl.js EXTEND
```

Cela ne devrait rien imprimer&nbsp;:

```bash
node northBridgeControl.js GO
```

Une fois que votre script fonctionne comme décrit dans l'objectif, cliquez sur *HACK* pour valider votre travail&nbsp;!

## Ressources utiles

* [Introduction MDN aux conditions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - Instruction IF](https://javascript.info/ifelse#the-if-statement)
* [MDN&nbsp;: Types de données JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)