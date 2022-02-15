# Apprendre à écrire une Fonction JavaScript

L'objectif de cet exercice est d'apprendre à [créer une Fonction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) qui prend des **arguments** (également appelés «&nbsp;paramètres&nbsp;»). Un **argument** est un élément de données d'entrée que vos fonctions peuvent utiliser pour produire différents résultats.

Créez un fichier appelé `politeLasers.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Dans ce fichier, vous devez créer une fonction appelée `getLaserSetting`. Voici un code que vous pouvez utiliser comme point de départ. La fonction est déjà définie, mais ne fonctionne pas encore comme décrite dans l'objectif&nbsp;:

```js
function getLaserSetting(magicWord) {
  if (magicWord === 'the magic word here') {
    return 'what should this be?';
  } else {
    return 'ON';
  }
}

const currentSetting = getLaserSetting('right now!');
console.log('The current laser setting is: ' + currentSetting);
```

Dans l'objectif, il est dit que votre fonction doit réexécuter la chaîne de caractères `OFF` lorsque le premier argument de la fonction (`magicWord` dans l'exemple ci-dessus) correspond à la chaîne de caractères `please`. `ON` doit être renvoyé avec toute autre entrée.

Lorsque votre fonction fonctionne comme indiqué dans l'objectif, cliquez sur le bouton *HACK* pour valider votre travail.

## Liens utiles

* [Guide des Fonctions JavaScript.info](https://javascript.info/function-basics)
* [Déclaration de fonction](https://javascript.info/function-basics#function-declaration)
* [Renvoyer des valeurs de fonctions](https://javascript.info/function-basics#returning-a-value)
* [Guide des fonctions MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)