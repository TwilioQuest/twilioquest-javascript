# Première classe

<div class="aside">
<h3>Liste de tâches</h3>
<ul>
  <li>Créer un fichier appelé <code>classes.js</code>.</li>
  <li>Créer une classe appelée <code>Materializer</code> qui prend un argument de chaîne unique.</li>
  <li>Votre fonction doit renvoyer un objet comme décrit ci-dessous.</li>
</ul>
</div>
Un étrange appareil, dont l'utilité n'est pas évidente de prime abord, est placé au centre de la pièce de l'aile nord du labo. Après avoir inspecté la console devant vous, vous concluez qu'il s'agit d'un panneau de commande pour un **instantiateur de matière**. Il doit s'agir de la grande chambre au centre de la pièce&nbsp;!

Toutefois, la console est remplie de journaux d'erreurs indiquant qu'elle a été endommagée pendant l'explosion du labo. Si vous réussissez à reconnecter cette console (et une autre comme celle-ci), la chambre au centre du labo devrait être à nouveau opérationnelle.

## Correction de la console avec classe

Pour corriger ce composant de l'instantiateur de matière, vous devez le remplacer en tant qu'élément de code JavaScript qui fournit un objet de configuration utilisé dans le processus de transformation.

Créez un fichier appelé `classes.js` dans votre dossier de code. Dans ce fichier, [créez une classe](https://javascript.info/class) appelée `Materializer`.

Elle doit contenir&nbsp;:

- une propriété appelée `target` définie comme étant égale au premier argument du constructeur
- une propriété `activated` définie par défaut sur `false`
- une fonction d'instance appelée `activate` qui définit `activated` sur true
- une fonction d'instance appelée `materialize` qui renvoie la valeur de la propriété `target` d'une instance si la propriété `activated` est définie sur true. Sinon, elle renvoie `undefined` (rien n'est renvoyé).

Lorsque vous avez créé une classe `Materializer` qui répond aux critères ci-dessus, cliquez sur *HACK* pour valider votre travail&nbsp;!