# Littéral d'objet

<div class="aside">
<h3>Liste de tâches</h3>
<ul>
  <li>Créer un fichier appelé <code>construction.js</code>.</li>
  <li>Créer une fonction appelée <code>construct</code> qui prend un argument de chaîne de caractères unique.</li>
  <li>Votre fonction doit renvoyer un objet comme décrit ci-dessous.</li>
</ul>
</div>
Un étrange appareil, dont l'utilité n'est pas évidente de prime abord, est placé au centre de la pièce de l'aile nord du labo. Après avoir inspecté la console devant vous, vous concluez qu'il s'agit d'un panneau de commande pour un **instantiateur de matière**. Il doit s'agir du grand caisson au centre de la pièce&nbsp;!

Toutefois, la console est remplie de logs d'erreurs indiquant qu'elle a été endommagée pendant l'explosion du labo. Si vous réussissez à reconnecter cette console (et une autre comme celle-ci), le caisson au centre du labo devrait être à nouveau opérationnel.

## Créer un littéral d'objet

L'instantiateur de matière est capable de créer de nouveaux objets à partir de rien&nbsp;! La fonction JavaScript que vous devez corriger dans cet objectif est également responsable de la fabrication des objets, à l'aide de la [notation littérale d'objet](https://javascript.info/object#literals-and-properties).

Créez un fichier appelé `construction.js` dans votre dossier de code. Dans ce fichier, créez une fonction appelée `construct` qui renvoie un [littéral d'objet](https://javascript.info/object#literals-and-properties) avec les propriétés suivantes&nbsp;:

| Propriété| Type| Valeur| Remarques|
|----------|----------|----------|----------|
| name| string| Afficher les notes| Il s'agit du premier argument transmis à votre fonction `construct`|
| material| string| 'human'| |
| assemble| boolean| true| |
| duration| number| 1000| |

Lorsque vous avez écrit une fonction qui peut effectuer la tâche décrite ci-dessus, cliquez sur le bouton *HACK*&nbsp;!