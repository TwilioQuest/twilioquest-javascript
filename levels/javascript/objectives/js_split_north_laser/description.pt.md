<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.northWing &&
worldState.northWing.hadSavedConversation;
%>

# Ative o Feixe 4

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
  <li>Crie um arquivo chamado <code>targetingSolution.js</code></li>
  <li>Crie uma classe chamada <code>TargetingSolution</code> usando a especificação neste objetivo</li>
</ul>
<% } else { %>
<ul>
  <li>Encontre e fale com o físico teórico, que está preso na ala norte do laboratório</li>
  <li>Retorne aqui para ativar o feixe 4</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
Depois de inserir a senha do físico, a tela acende e você começa a solucionar os problemas dos sistemas conectados ao feixe 4.

Parece que os sistemas de direcionamento deste feixe foram danificados durante o acidente. Para reiniciar este feixe, você precisará implementar um novo mecanismo de direcionamento para o laser usando [classes do JavaScript](https://javascript.info/class) e [objetos literais](https://javascript.info/object#literals-and-properties).

## Reiniciar o feixe

Crie um arquivo chamado `targetingSolution.js` na pasta de códigos. Dentro deste arquivo, [crie uma classe do JavaScript](https://javascript.info/class) chamada `TargetingSolution`. Essa classe armazenará as informações de direcionamento para o laser e fornecerá uma string formatada contendo as coordenadas de destino.

O construtor desta classe deve ter um argumento, um objeto literal contendo as coordenadas precisas x, y e z de destino dentro do espaço 3D do laboratório.

Seu construtor `TargetingSolution` deve armazenar as três propriedades a seguir como variáveis de instância do objeto de configuração.

| propriedade| tipo|
|----------|----------|
| x| número|
| y| número|
| z| número|

Além disso, sua classe deve implementar uma função de instância chamada `target` que retorna uma string formatada contendo as coordenadas de destino da instância no formato `(x, y, z)`, incluindo parênteses, espaços e vírgulas.

Aqui está um exemplo de uso da classe que você deve criar.

```js
const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1,
});

console.log(sln.target()); // Should output a string of (45, 12, -1)
```

**Observe que sua função de destino deve usar a formatação e o espaçamento exatos, conforme mostrado!**

Como sempre, o código que você pode usar como ponto de partida pode ser encontrado na guia Help (Ajuda). Quando o código estiver pronto, clique no botão _HACK_ para ativar este laser novamente!

<% } else { %>

Você examina os controles desse feixe, mas eles estão bloqueados no momento. Você precisará do **código de acesso do físico teórico** para ativar esse laser.

O físico teórico provavelmente está na **ala norte do laboratório**, onde eles estudaram a capacidade do ducktypium de dobrar o espaço-tempo e manipular a matéria.

**Fale com o físico teórico** para receber o código de acesso para este feixe.

<% } %>