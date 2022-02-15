<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.beamTwoOnline &&
worldState.beamThreeOnline &&
worldState.beamFourOnline;
%>

# Activer le dernier laser

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
  <li>Créer un fichier appelé <code>ducktypium.js</code></li>
  <li>Créer une classe <code>Ducktypium</code> comme décrit dans l'objectif grâce aux compétences que vous avez acquises.</li>
  <li>Cliquer sur <em>HACK</em> une fois que vous avez terminé pour inverser l'expérience!</li>
</ul>
<% } else { %>
<ul>
  <li>Trouver les trois scientifiques perdus dans le labo et obtenir leurs codes d'activation</li>
  <li>Utiliser les codes d'activation pour activer les lasers 2, 3 et 4</li>
  <li>Revenir ici pour activer le dernier laser</li>
</ul>
<% } %>
</div>
<%
if (isObjectiveReady) {
%>
Avec les trois autres faisceaux réactivés, vous pouvez maintenant **inverser l'expérience ratée** et sauver la réalité telle que nous la connaissons&nbsp;!

Vous parcourez activement les contrôles du faisceau primaire pour analyser le problème de l'expérience précédente. Il semble que les calculs de la scientifique en chef étaient corrects et qu'ils auraient dû fonctionner comme prévu. L'explosion a été causée par une autre erreur qui, **à première vue, est un sabotage volontaire**&nbsp;! Vous vous jurez de découvrir le coupable de ce sabotage, mais pour l'instant, vous concentrez votre attention sur ce que vous avez à faire.

Le fichier JavaScript saboté a été supprimé et vous ne trouvez aucune sauvegarde. Vous allez devoir créer une sauvegarde pour cet élément crucial. Le fichier en question décrit les propriétés du ducktypium et il exécute un certain nombre de tâches liées au processus de stabilisation du cristal.

## La classe Ducktypium

Dans votre dossier de code, créez un fichier nommé `ducktypium.js`. À l'intérieur, créez une classe appelée `Ducktypium`. Le constructeur doit prendre un argument de chaîne de caractères unique&nbsp;: une couleur cristal,puis il doit enregistrer cette donnée dans une variable d'instance nommée `color`. La **couleur peut uniquement être `red`, `blue`, ou `yellow`**. Le constructeur doit [envoyer une erreur](https://javascript.info/try-catch#throwing-our-own-errors) au cas où l'argument correspond à toute autre chaîne de caractères.

Lorsque la classe est créée, elle doit **également définir une propriété** appelée `calibrationSequence` qui est initialement définie comme une tableau **vide**.

La classe Ducktypium doit implémenter deux méthodes d'instance&nbsp;: `refract` et `calibrate`. Chacune de ces fonctions sera décrite ci-dessous.

## La méthode `refract`

L'une des méthodes requises décrit les propriétés réfractives du ducktypium lorsqu'il est exposé à une lumière colorée.

La méthode `refract` doit prendre un argument de chaîne de caractères unique, qui doit être `red`, `blue` ou `yellow`. Tout comme le constructeur, la méthode doit [afficher une erreur](https://javascript.info/try-catch#throwing-our-own-errors) si l'argument correspond à une autre chaîne de caractères. Cette fonction doit **renvoyer une chaîne de caractères unique**. Il s'agit de la couleur produite par la combinaison de la propriété `color` de l'instance et de la couleur transmise à la fonction `refract`.

- Si la propriété `color` de l'instance est identique à l'argument transmis, elle renvoie cette valeur
- Si la combinaison de couleurs est différente, elle doit renvoyer une chaîne de caractères qui correspond à la combinaison des deux [couleurs primaires](https://en.wikipedia.org/wiki/Primary_color).

Pour référence, les couleurs primaires se combinent de la manière suivante&nbsp;:

- <span style="color:red">rouge</span> + <span style="color:blue">bleu</span> = <span style="color:purple">violet</span>
- <span style="color:red">rouge</span> + <span style="color:#ad9400">jaune</span> = <span style="color:orange">orange</span>
- <span style="color:#ad9400">jaune</span> + <span style="color:blue">bleu</span> = <span style="color:green">vert</span>

## La méthode `calibrate`

L'autre méthode requise crée une séquence de calibrage nécessaire pour stabiliser le cristal de ducktypium.

La méthode `calibrate` prend un argument unique, une série de nombres. Avec cette série d'entrées, vous devez effectuer les opérations suivantes&nbsp;:

- Trier les nombres du plus petit au plus grand
- Multiplier chaque nombre de la série par `3`
- Attribuer la série issue de la variable `calibrationSequence` à l'instance `Ducktypium`

## Exemple d'utilisation

Quand vous avez terminé, votre classe de Ducktypium doit se comporter comme dans l'exemple suivant.

```js
// The following would produce an error
try {
  const badColor = new Ducktypium("pink");
} catch (e) {
  console.log("Color must be red, yellow, or blue!");
}

// Create a new instance of the class
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
```

Il y a un exemple de code que vous pouvez utiliser comme point de départ dans l'onglet Aide. Cela nécessitera toutes vos compétences en JavaScript, mais vous en êtes tout à fait capable&nbsp;! Le destin du cloud est entre vos mains.

Lorsque votre script `ducktypium.js` est prêt, cliquez sur le bouton _HACK_ pour inverser l'expérience&nbsp;!

<% } else { %>

Pour inverser l'expérience de ducktypium ratée, vous devez **réactiver les quatre lasers de stase**, y compris celui-ci (faisceau&nbsp;1). Les faisceaux 2, 3 et 4 doivent d'abord être remis en ligne avant que de pouvoir réactiver ce faisceau-là.

La scientifique en chef vous a confié que **ses collègues ont les codes d'activation** nécessaires pour redémarrer les trois autres lasers. Retrouvez ces trois scientifiques dans le reste du labo et **utilisez leurs codes** pour redémarrer les autres lasers de cette salle.

Une fois les trois autres faisceaux remis en ligne, **revenez ici pour activer le faisceau final**.

<% } %>
