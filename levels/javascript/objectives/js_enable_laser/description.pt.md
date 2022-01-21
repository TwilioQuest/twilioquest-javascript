<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
%>

# Uma revelação incendiária

A equipe de pesquisa do TwilioQuest está prestes a tentar um experimento inovador. Usando quatro protótipos de feixes de estabilização molecular, eles serão os primeiros cientistas a observar o **ducktypium**, a misteriosa fonte de poder do JavaScript, em uma forma sólida! No entanto, para que o experimento continue, **o quarto feixe de laser com defeito deve ser reiniciado**.

<% if (worldState.room1.passwordFound) { %>

## Reinicie o feixe stasis com defeito

Depois de uma série de testes, você descobriu que a senha do laser é `PEW PEW PEW!`. Digite a senha no campo de texto à direita e clique em _HACK_. Pela ciência!

<% } else { %>

Parece que você precisa de uma senha para reiniciar o laser. **Converse com a cientista chefe** (você passou por ela quando entrou na sala) para obter a senha!

<% } %>