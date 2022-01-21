<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.eastWing &&
worldState.eastWing.hadSavedConversation;
%>

# Ative o Feixe 3

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
  <li>Crie um arquivo chamado <code>laserPower.js</code></li>
  <li>Crie uma função chamada <code>calculatePower</code> que use uma matriz de números como o único argumento.</li>
  <li>Sua função deve <b>retornar um número</b>. O número deve ser o resultado da transformação e da combinação da matriz de entrada, conforme descrito no objetivo.</li>
  <li>Clique em <em>HACK</em> quando terminar.</li>
</ul>
<% } else { %>
<ul>
  <li>Encontre e fale com o engenheiro elétrico na ala leste do laboratório</li>
  <li>Retorne aqui para ativar o feixe 3</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
Depois de inserir a senha do engenheiro elétrico, a tela acende e você começa a solucionar os problemas dos sistemas conectados ao feixe 3.

Parece que o feixe foi desligado devido a um erro em como ele calcula a potência para enviar através do feixe de laser. Essa lógica é determinada por uma função do JavaScript que você precisará corrigir.

Você terá que aproveitar tudo o que aprendeu sobre matrizes para superar esse desafio.

## Reiniciar o feixe

Crie um arquivo chamado `laserPower.js` na pasta de códigos. Dentro desse arquivo, [crie uma função do JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) chamada `calculatePower`.

Essa função deve ter um argumento, uma matriz de números. Essa matriz contém as configurações de potência agregada do laser, mas os números de entrada estão um pouco desalinhados.

Sua função `calculatePower` deve primeiro ajustar todos os valores na matriz de entrada **multiplicando-os por dois**. Depois disso, você deve **somar todos esses números** e **retornar o resultado** da sua função.

Quando o código estiver pronto, clique no botão _HACK_ para ativar este laser novamente!

<% } else { %>

Você examina os controles desse feixe, mas eles estão bloqueados no momento. Você precisará do **código de acesso do engenheiro elétrico** para ativar esse laser.

O engenheiro elétrico provavelmente está a bordo do cargueiro de suprimentos acoplado na **ala leste do laboratório**. Eles estavam processando uma nova remessa de suprimentos quando ocorreu a explosão.

**Fale com o engenheiro elétrico** para receber o código de acesso para este feixe.

<% } %>