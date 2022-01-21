<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
%>

<% if (worldState.room1.passwordFound) { %>

# Digite sua senha

Depois de uma série de testes, você descobriu que a senha do laser é `PEW PEW PEW!`. Digite a senha no campo de texto à direita e clique em _HACK_. Pela ciência!

<% } else { %>

# Obtenha a senha primeiro!

Não é possível reiniciar o laser sem uma **senha especial**. Para obter a senha, **fale com a cientista líder** (você passou por ela quando entrou na sala). Ela indicará a direção certa!

<% } %>