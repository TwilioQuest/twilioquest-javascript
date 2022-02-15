<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
%>

<% if (worldState.room1.passwordFound) { %>

# Mot de passe, s'il vous plaît

Après une série de défis, vous avez découvert que le mot de passe du laser est `PEW PEW PEW!`&nbsp;: saisissez le mot de passe dans le champ de texte à droite et cliquez sur _HACK_. Pour la science&nbsp;!

<% } else { %>

# Obtenez d'abord le mot de passe&nbsp;!

Vous ne pourrez pas redémarrer le laser sans un **mot de passe spécial**. Pour obtenir le mot de passe, **parlez à la scientifique en chef** (vous l'avez vue à l'entrée de la salle). Elle vous pointera dans la bonne direction&nbsp;!

<% } %>
