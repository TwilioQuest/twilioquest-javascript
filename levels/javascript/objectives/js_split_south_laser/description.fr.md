<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.southWing &&
worldState.southWing.hadSavedConversation;
%>

# Activer le laser&nbsp;2

<style>
table.lasers {
  margin-top: 10px;
}
table.lasers th, table.lasers td {
  text-align: center !important;
}
table.lasers td span {
  font-weight: bold;
}
table.lasers td span.on {
  color: green;
}
table.lasers td span.off {
  color: red;
}
</style>
<table class="lasers">
  <tr>
    <th>BEAM 1</th>
    <th>BEAM 2</th>
    <th>BEAM 3</th>
    <th>BEAM 4</th>
  </tr>
  <tr>
    <td>
      <% if (worldState.beamOneOnline) { %>
        <span class="on">ONLINE</span>
      <% } else { %>
        <span class="off">OFFLINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamTwoOnline) { %>
      <span class="on">ONLINE</span>
      <% } else { %>
        <span class="off">OFFLINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamThreeOnline) { %>
      <span class="on">ONLINE</span>
      <% } else { %>
        <span class="off">OFFLINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamFourOnline) { %>
      <span class="on">ONLINE</span>
      <% } else { %>
        <span class="off">OFFLINE</span>
      <% } %>
    </td>
  </tr>
</table>
<div class="aside">
<h3>Liste de tâches</h3>
<% 
if (isObjectiveReady) {
%>
<ul>
  <li>Créer un fichier appelé <code>sortOrder.js</code></li>
  <li>Il doit comporter deux arguments de ligne de commande, que vous devez comparer</li>
  <li>Votre script doit afficher <code>-1</code>, <code>0</code>, ou <code>1</code> comme décrit ci-dessous, dans l'ordre alphabétique.</li>
</ul>
<% } else { %>
<ul>
  <li>Trouver le botaniste dans l'aile sud du laboratoire et lui parler.</li>
  <li>Revenir ici pour activer le laser 2</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
Le code d'activation du botaniste vous permet d'accéder aux commandes de ce laser de stase. Après avoir exécuté un court diagnostic de routine, vous constatez qu'il manque une fonctionnalité essentielle au laser&nbsp;: un script qui **trie les chaînes de caractères dans l'ordre alphabétique**.

Vous devrez réécrire ce script de tri pour redémarrer le laser.

## Mettre de l'ordre

Dans votre dossier de code, créez un script appelé `sortOrder.js`. Ce script utilise **deux arguments de ligne de commande**&nbsp;: une paire de chaînes de caractères qui doit être comparée pour voir laquelle arrive en premier dans l'ordre alphabétique (la casse n'a aucune importance ici).

Pour tester votre script, vous devez l'exécuter comme suit&nbsp;:

```bash
node sortOrder.js cats dogs
```

Votre script doit déterminer si la première chaîne est avant, après ou dans la même position (égale) que la deuxième chaîne, par ordre alphabétique. Pour chaque cas, vous devez imprimer un numéro avec `console.log` comme décrit ci-dessous.

- Si le premier argument est **placé avant** le deuxième dans l'alphabet, votre script doit imprimer `-1`.
- Si le premier argument a **la même position** que le second, votre script doit imprimer `0`.
- Si le premier argument est **placé après** le deuxième dans l'alphabet, votre fonction doit imprimer `1`.

Une fois que votre script a implémenté cette fonctionnalité de comparaison, cliquez sur le bouton _HACK_ pour redémarrer le laser&nbsp;!

<% } else { %>

Vous examinez les commandes de ce laser de stase, mais elles sont actuellement verrouillées. Vous aurez besoin du **code d'accès du botaniste** pour activer ce laser.

Le botaniste se trouve probablement dans l'**aile sud** du labo, où il étudiait l'effet du ducktypium sur les végétaux.

**Parlez au botaniste** pour recevoir le code d'accès pour ce laser.

<% } %>
