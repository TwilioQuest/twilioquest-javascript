# Objets sophistiqués

L'objectif de cet exercice est de vous familiariser avec la [notation littérale d'objet](https://javascript.info/object#literals-and-properties) JavaScript.

Dans la majorité de votre travail dans le labo JavaScript, vous avez utilisé des objets intégrés et des types de données «&nbsp;primitives&nbsp;» comme les nombres, les chaînes et les booléens. Parfois, votre code doit pouvoir représenter des concepts de données plus complexes propres à votre code, comme les utilisateurs, les articles de blog, les mentions J'aime ou les abonnements.

Dans cet exercice, vous allez apprendre à utiliser un outil à votre disposition pour créer des données plus complexes, un [littéral d'objet](https://javascript.info/object#literals-and-properties). Un objet que vous créez ainsi peut avoir ses propres propriétés et être affecté à une seule variable.

Créez un fichier appelé `construction.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Dans ce fichier, vous devez créer une fonction appelée `construct`. Voici un code que vous pouvez utiliser comme point de départ. La fonction est déjà définie, mais ne fonctionne pas encore comme décrite dans l'objectif&nbsp;:

```js
function construct(name) {
  let person = {};

  return person;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name); // should be "Kevin"
console.log('duration is: ' + somePerson.duration); // should be 1000
```

Lorsque votre fonction fonctionne comme indiqué dans l'objectif, cliquez sur le bouton *HACK* pour valider votre travail.

## Liens utiles

* [JavaScript.info&nbsp;: Notation littérale d'objet](https://javascript.info/object#literals-and-properties)
* [MDN&nbsp;: Initialisation d'objet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
* [JavaScript.info&nbsp;: Retourner des valeurs des fonctions](https://javascript.info/function-basics#returning-a-value)
* [MDN&nbsp;: Guide des fonctions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)