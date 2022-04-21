# Ouverture du coffre de ravitaillement

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Créer un fichier appelé <code>chestConfiguration.js</code></li>
  <li>Déclarer trois variables comme décrit dans le tableau ci-dessous</li>
  <li><em>HACKER</em> quand c'est terminé</li>
</ul>
</div>
Vous remarquez un coffre contenant des ressources destinées aux opérateurs (comme vous) dans le programme TwilioQuest. Il devrait être libre d'accès, mais il est verrouillé pour l'instant. Pour accéder à ces ressources, vous pouvez utiliser la **méthode de configuration override que vous avez utilisée précédemment**.

Créez un fichier appelé `chestConfiguration.js` dans votre dossier de code. Dans ce fichier, déclarez les variables suivantes pour override les paramètres de sécurité de ce coffre&nbsp;:

| Nom de la variable| Valeur|
|----------|----------|
| `verifiedUser`| Valeur [booléenne](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) `true`|
| `accessLevel`| Valeur [numérique](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) de `7`|
| `favoriteRobot`| Valeur de [chaîne de caractères](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) définie sur `Cedric`|

Quand vous avez terminé, cliquez sur le bouton *HACK* pour vérifier votre travail et override le paramètre laser pour cette barrière de sécurité.