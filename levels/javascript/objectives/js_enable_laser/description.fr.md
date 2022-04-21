<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
%>

# Une révélation incendiaire

L'équipe de recherche de TwilioQuest est sur le point de tenter une expérience révolutionnaire. Grâce à quatre prototypes de faisceaux de stabilisation moléculaire, ils seront les premiers scientifiques à observer le **ducktypium**, la mystérieuse source de puissance de JavaScript, sous une forme solide&nbsp;! Toutefois, pour que l'expérience prenne place, **le quatrième rayon laser défectueux doit être redémarré**.

<% if (worldState.room1.passwordFound) { %>

## Redémarrer le faisceau de stabilisation défectueux

Après une série de défis, vous avez découvert que le mot de passe du laser est `PEW PEW PEW!`&nbsp;: saisissez le mot de passe dans le champ de texte à droite et cliquez sur _HACK_. Pour la science&nbsp;!

<% } else { %>

Il semble que vous ayez besoin d'un mot de passe pour redémarrer le laser. **Parlez à la scientifique en chef** (vous l'avez vue à l'entrée de la salle) pour obtenir le mot de passe&nbsp;!

<% } %>
