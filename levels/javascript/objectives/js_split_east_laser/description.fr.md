<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.eastWing &&
worldState.eastWing.hadSavedConversation;
%>

# Activer le laser&nbsp;3

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
<h3>To-Do List</h3>
<% 
if (isObjectiveReady) {
%>
<ul>
  <li>Créer un fichier appelé <code>laserPower.js</code></li>
  <li>Créer une fonction appelée <code>calculatePower</code> qui prend un tableau de nombres comme seul argument.</li>
  <li>Votre fonction doit <b>renvoyer un numéro</b>. Le nombre doit être le résultat de la transformation et de la combinaison du tableau d'entrée, comme décrit dans l'objectif.</li>
  <li>Lorsque vous avez terminé, cliquez sur <em>HACK</em>.</li>
</ul>
<% } else { %>
<ul>
  <li>Trouver l'ingénieur électricien de l'aile est du labo et lui parler</li>
  <li>Revenir ici pour activer le laser 3</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
Après avoir saisi le code d'accès de l'ingénieur électricien, l'affichage prend vie et vous commencez à dépanner les systèmes connectés au faisceau&nbsp;3.

Il semble que le faisceau ait été mis hors ligne en raison d'une erreur de calcul de la puissance à envoyer à travers le faisceau laser. Cette logique est régie par une fonction JavaScript que vous devrez corriger.

Vous devrez vous appuyer sur tout ce que vous avez appris sur les tableaux pour relever ce défi.

## Redémarrer le faisceau

Créez un fichier appelé `laserPower.js` dans votre dossier de code. Dans ce fichier, [créez une fonction JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) appelée `calculatePower`.

Cette fonction doit prendre un argument, un tableau de nombres. Ce tableau contient les paramètres d'alimentation agrégés pour le laser, mais les nombres saisis ne sont pas tout à fait exacts.

Votre fonction `calculatePower` doit d'abord ajuster toutes les valeurs du tableau d'entrée en **les multipliant par deux**. Ensuite, vous devez **ajouter tous ces chiffres ensemble** et **renvoyer le résultat** de votre fonction.

Lorsque votre code est prêt, cliquez sur le bouton _HACK_ pour reconnecter ce laser&nbsp;!

<% } else { %>

Vous examinez les commandes de ce laser de stase, mais elles sont actuellement verrouillées. Vous aurez besoin du **code d'accès de l'ingénieur électricien** pour activer ce laser.

L'ingénieur électricien est probablement à bord du navire d'approvisionnement amarré dans l'**aile est** du labo. Il procédait à une nouvelle expédition de marchandises lorsque l'explosion s'est produite.

**Parlez à l'ingénieur électricien** pour recevoir le code d'accès pour ce faisceau.

<% } %>
