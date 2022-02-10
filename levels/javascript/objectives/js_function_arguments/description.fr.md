# Des arguments incontestables

<div class="aside">
<h3>Liste de tâches</h3>
<ul>
  <li>Créer un fichier appelé <code>politeLasers.js</code></li>
  <li>Créer une fonction appelée <code>getLaserSetting</code> qui prend un argument de chaîne de caractères unique.</li>
  <li>Si l'argument est «please», renvoyer la chaîne de caractères «OFF». Sinon, renvoyer la chaîne «ON».</li>
  <li>Cliquer sur <em>HACK</em> une fois terminé.</li>
</ul>
</div>
Cette barrière de sécurité est elle aussi défectueuse, et vous pouvez rapidement comprendre pourquoi. Votre vieil ami Glen a configuré cette barrière de sécurité pour qu'elle ne s'arrête que si on lui demande gentiment.

Pour lever cette barrière, vous devez écrire une fonction qui prend [des arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) (également appelés «&nbsp;paramètres&nbsp;») et exécuter une [logique booléenne](https://javascript.info/ifelse) simple.

Consultez la section «&nbsp;Aide&nbsp;» pour plus d'informations sur les arguments de fonction. Si vous avez besoin d'aide pour utiliser la logique booléenne, vous pouvez commencer par relever les défis de l'**aile sud** du laboratoire.

## Lever la barrière

Comme la barrière précédente, celle-ci est alimentée par une **fonction JavaScript** qui détermine si les lasers de la barrière sont `"ON"` ou `"OFF"`. Vous devrez **remplacer cette fonction** pour désactiver la barrière laser.

Créez un fichier appelé `politeLasers.js` dans votre dossier de code. Dans ce fichier, [créez une fonction JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) appelée `getLaserSetting`, comme vous l'avez fait lors du dernier défi.

Cette fois, votre fonction doit renvoyer une valeur différente basée sur le **premier argument** de la fonction `getLaserSetting`. Si le premier argument est la chaîne de caractères `please`, il renvoie `OFF`. Si le premier argument est autre chose, il renvoie `ON`.

Une fois votre code prêt, cliquez sur le bouton *HACK* pour remplacer la fonction de la commande du laser.