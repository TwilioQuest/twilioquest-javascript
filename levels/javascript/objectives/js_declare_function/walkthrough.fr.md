# Apprendre à écrire une Fonction JavaScript

L'objectif de cet exercice est d'apprendre à [créer une Fonction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) dans JavaScript. Une **fonction** est un fragment de code réutilisable que vous pouvez **appeler** à plusieurs reprises pour effectuer une tâche spécifique.

Dans de nombreux exemples que vous avez vus jusqu'à présent, vous avez peut-être remarqué que nous utilisons une fonction intégrée à JavaScript appelée `console.log`. Cette fonction permet d'imprimer une chaîne de texte dans la fenêtre du terminal. Pour éliminer cette barrière, vous allez devoir créer votre propre fonction.

Créez un fichier appelé `laserFunction.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Dans ce fichier, vous devez créer une fonction appelée `getLaserSetting`. Voici un code que vous pouvez utiliser comme point de départ. La fonction est déjà définie, mais elle renvoie actuellement une valeur incorrecte&nbsp;:

```js
function getLaserSetting() {
  const setting = 42; // <- You'll need to change this line of code!
  return setting;
}

const currentSetting = getLaserSetting();
console.log('The current laser setting is: ' + currentSetting);
```

Vous allez devoir modifier le contenu de la fonction déclarée ci-dessus pour remplir cet objectif. Les accolades ouverte et fermée (les caractères `{` et `}`) indiquent le début et la fin du code à l'intérieur de la fonction. Seul le code écrit entre les caractères `{` et `}` sera exécuté dans le cadre de votre fonction&nbsp;!

Votre fonction doit **renvoyer** la valeur correcte pour régler le laser, comme décrit dans l'objectif. Utilisez ce que vous avez appris sur les variables pour apporter les modifications nécessaires. Une fois que votre fonction fonctionne comme indiqué dans l'onglet objectif, cliquez sur le bouton *HACK* pour valider votre travail.

## Liens utiles

* [Guide des fonctions JavaScript.info](https://javascript.info/function-basics)
* [Déclaration de fonction](https://javascript.info/function-basics#function-declaration)
* [Renvoyer des valeurs de fonctions](https://javascript.info/function-basics#returning-a-value)
* [Guide des fonctions MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)