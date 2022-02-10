<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.northWing &&
worldState.northWing.hadSavedConversation;
%>

# Activer le faisceau&nbsp;4

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
  <li>Créer un fichier appelé <code>targetingSolution.js</code></li>
  <li>Créer une classe appelée <code>TargetingSolution</code> à l'aide de la spécification de cet objectif</li>
</ul>
<% } else { %>
<ul>
  <li>Localisez et parlez au le physicien théoricien piégé dans l'aile nord du labo et lui parler</li>
  <li>Revenez ici pour activer le faisceau 4</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
Après avoir saisi le code d'accès du physicien, l'affichage prend vie et vous commencez à dépanner les systèmes connectés au faisceau&nbsp;4.

Il semble que les systèmes de ciblage de ce faisceau aient été endommagés au cours de l'accident. Pour redémarrer ce faisceau, vous devez implémenter un nouveau mécanisme de ciblage pour le laser à l'aide de [classes JavaScript](https://javascript.info/class) et de [littéraux d'objet](https://javascript.info/object#literals-and-properties).

## Redémarrer le faisceau

Créez un fichier appelé `targetingSolution.js` dans votre dossier de code. Dans ce fichier, [créez une classe JavaScript](https://javascript.info/class) appelée `TargetingSolution`. Cette classe stocke les informations de ciblage pour le laser et fournit une chaîne formatée contenant les coordonnées de la cible.

Le constructeur de cette classe doit prendre un argument&nbsp;: un littéral d'objet contenant les coordonnées&nbsp;x, y et z précises de la cible dans l'espace&nbsp;3D du labo.

Votre constructeur `TargetingSolution` doit stocker les trois propriétés suivantes en tant que variables d'instance de l'objet de configuration.

| property| type|
|----------|----------|
| x| number|
| y| number|
| z| number|

En outre, votre classe doit implémenter une fonction d'instance appelée `target` qui renvoie une chaîne formatée contenant les coordonnées cibles de l'instance au format `(x, y, z)`, y compris les parenthèses, les espaces et les virgules.

Voici un exemple d'utilisation de la classe que vous devez créer.

```js
const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1,
});

console.log(sln.target()); // Should output a string of (45, 12, -1)
```

**Notez que votre fonction cible doit utiliser le formatage et l'espacement exacts, comme illustré&nbsp;!**

Comme toujours, le code que vous pouvez utiliser comme point de départ se trouve dans l'onglet Aide. Lorsque votre code est prêt, cliquez sur le bouton _HACK_ pour reconnecter ce laser&nbsp;!

<% } else { %>

Vous examinez les commandes de ce faisceau statique, mais elles sont actuellement verrouillées. Vous aurez besoin du **code d'accès du physicien théoricien** pour activer ce laser.

Le physicien théoricien se trouve le plus souvent dans **l'aile nord** du labo, où il étudie la capacité du ducktypium à plier l'espace-temps et à manipuler la matière.

**Parlez au physicien théoricien** pour recevoir le code d'accès pour ce faisceau.

<% } %>
