<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.southWing &&
worldState.southWing.hadSavedConversation;
%>

# Ative o Feixe 2

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
    <th>FEIXE 1</th>
    <th>FEIXE 2</th>
    <th>FEIXE 3</th>
    <th>FEIXE 4</th>
  </tr>
  <tr>
    <td>
      <% if (worldState.beamOneOnline) { %>
        <span class="on">ON-LINE</span>
      <% } else { %>
        <span class="off">OFF-LINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamTwoOnline) { %>
      <span class="on">ON-LINE</span>
      <% } else { %>
        <span class="off">OFF-LINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamThreeOnline) { %>
      <span class="on">ON-LINE</span>
      <% } else { %>
        <span class="off">OFF-LINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamFourOnline) { %>
      <span class="on">ON-LINE</span>
      <% } else { %>
        <span class="off">OFF-LINE</span>
      <% } %>
    </td>
  </tr>
</table>
<div class="aside">
<h3>Lista de tarefas</h3>
<% 
if (isObjectiveReady) {
%>
<ul>
  <li>Crie um arquivo chamado <code>sortOrder.js</code></li>
  <li>Ele deve ter dois argumentos de linha de comando, que você deve comparar</li>
  <li>Seu script deve imprimir <code>-1</code>, <code>0</code> ou <code>1</code> conforme descrito abaixo, com base na ordem alfabética</li>
</ul>
<% } else { %>
<ul>
  <li>Encontre e fale com o botânico na ala sul do laboratório</li>
  <li>Retorne aqui para ativar o feixe 2</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
Usando o código de ativação do botânico, você acessa os controles deste feixe. Depois de executar uma rotina rápida de diagnóstico, você verá que o laser perdeu uma funcionalidade chave, um script que **classifica strings em ordem alfabética**.

Você precisará reescrever este script de classificação para reiniciar o laser.

## Organizar tudo

Na sua pasta de códigos, crie um script chamado `sortOrder.js`. Este script terá **dois argumentos de linha de comando**, um par de strings que deve ser comparado para ver qual vem primeiro em ordem alfabética (letra maiúscula não é importante).

Para testar seu script, você o executa da seguinte forma:

```bash
node sortOrder.js cats dogs
```

Seu script deve determinar se a primeira string é anterior, posterior ou na mesma posição (igual) da segunda string, em ordem alfabética. Para cada caso, você deve imprimir um número com `console.log` conforme descrito abaixo.

- Quando o primeiro argumento for **anterior** ao segundo no alfabeto, o script deverá imprimir `-1`.
- Quando o primeiro argumento for o **mesmo** que o segundo, o script deverá imprimir `0`.
- Quando o primeiro argumento for **posterior** ao segundo no alfabeto, sua função deverá imprimir `1`.

Quando o script implementar esta funcionalidade de comparação, clique no botão _HACK_ para reiniciar este laser!

<% } else { %>

Você examina os controles desse feixe, mas eles estão bloqueados no momento. Você precisará **do código de acesso do botânico** para ativar este laser.

O botânico provavelmente está na **ala sul do laboratório**, onde eles haviam estudado o efeito do ducktypium na vida das plantas.

**Fale com o botânico** para receber o código de acesso para este feixe.

```
<% } %>
```