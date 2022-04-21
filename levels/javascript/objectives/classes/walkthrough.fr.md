# La grande classe

L'objectif de cet exercice est de vous familiariser avec les [classes JavaScript](https://javascript.info/class). Les «&nbsp;classes&nbsp;» sont de nouveaux types d'objets que vous pouvez créer dans votre propre code.

Dans la majorité de votre travail dans le labo JavaScript, vous avez utilisé des objets intégrés et des types de données «&nbsp;primitives&nbsp;» comme les nombres, les chaînes et les booléens. Les classes représentent des concepts de données plus complexes spécifiques à votre code, comme des utilisateurs, des articles de blog, des mentions J'aime ou des abonnements. Contrairement aux [littéraux d'objet](https://javascript.info/object#literals-and-properties), les classes peuvent également avoir des comportements exploitant leurs propres données.

Dans cet exercice, vous devez [créer une classe](https://javascript.info/class) à partir de la spécification de l'objectif.

Créez un fichier appelé `classes.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Dans ce fichier, vous devez créer une classe appelée `Materializer`. Voici un code que vous pouvez utiliser comme point de départ. La classe est déjà définie, mais ne fonctionne pas encore comme décrite dans l'objectif&nbsp;:

```js
class Materializer {
  constructor(targetName) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
```

Lorsque votre fonction fonctionne comme indiqué dans l'objectif, cliquez sur le bouton *HACK* pour valider votre travail.

## Liens utiles

* [JavaScript.info - Classes](https://javascript.info/class)
* [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)