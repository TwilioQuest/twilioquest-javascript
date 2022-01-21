<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.beamTwoOnline &&
worldState.beamThreeOnline &&
worldState.beamFourOnline;
%>

# Ative o feixe final

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
  <li>Crie um arquivo chamado <code>ducktypium.js</code></li>
  <li>Crie uma classe <code>Ducktypium</code> conforme descrito no objetivo, usando todas as habilidades aprendidas.</li>
  <li>Clique em <em>HACK</em> quando terminar para reverter o experimento!</li>
</ul>
<% } else { %>
<ul>
  <li>Encontre os três cientistas perdidos no laboratório e obtenha os códigos de ativação deles</li>
  <li>Use os códigos de ativação para ativar os feixes 2, 3 e 4</li>
  <li>Retorne aqui para ativar o feixe final</li>
</ul>
<% } %>
</div>
<%
if (isObjectiveReady) {
%>
Com os outros três feixes on-line, agora você tem a oportunidade de **reverter o experimento malsucedido** e salvar a realidade como a conhecemos!

Você examina os controles do feixe primário para analisar o problema no experimento anterior. Parece que os cálculos da cientista chefe estavam realmente corretos e deveriam ter funcionado conforme planejado. Na verdade, a explosão foi causada por outro erro, que **parece ser uma sabotagem deliberada!** Você jura que descobrirá o culpado por trás desta sabotagem, mas por enquanto, volta sua atenção para a tarefa em mãos.

O arquivo JavaScript sabotado foi excluído sem nenhum backup que você possa encontrar. Você precisará criar uma substituição para este importante utilitário. O arquivo em questão descreve as propriedades do ducktypium e executa uma série de tarefas relacionadas ao processo de estabilização do cristal.

## A classe Ducktypium

Na pasta de códigos, crie um arquivo chamado `ducktypium.js`. Dentro dela, crie uma classe chamada `Ducktypium`. O construtor deve usar um único argumento de string, uma cor de cristal e armazenar esses dados em uma variável de instância chamada `color`. A **cor só pode ser `red`, `blue` ou `yellow`**. O construtor deve [lançar um erro](https://javascript.info/try-catch#throwing-our-own-errors) se o argumento for qualquer outra string.

Quando a classe é criada, ela também deve **definir uma propriedade** chamada `calibrationSequence` que é inicialmente definida como uma **matriz vazia**.

A classe Ducktypium deve implementar dois métodos de instância: `refract` e `calibrate`. Cada uma dessas funções será descrita abaixo.

## O método `refract`

Um dos métodos necessários descreve as propriedades refrativas do ducktypium quando exposto à luz colorida.

O método `refract` deve ter um único argumento de string, que deve ser `red`, `blue` ou `yellow`. O método deve [lançar um erro](https://javascript.info/try-catch#throwing-our-own-errors) se o argumento for qualquer outra string, assim como o construtor. Essa função deve **retornar uma única string**, que é a cor produzida pela combinação da propriedade `color` da instância e a cor passada para a função `refract`.

- Se a propriedade `color` da instância for igual ao argumento passado, retorne esse valor
- Se a combinação de cores for diferente, ela deverá retornar uma string que é a combinação dessas duas [cores primárias](https://en.wikipedia.org/wiki/Primary_color).

Para referência, as cores primárias são combinadas das seguintes maneiras:

- <span style="color:red">vermelho</span> + <span style="color:blue">azul</span> = <span style="color:purple">roxo</span>
- <span style="color:red">vermelho</span> + <span style="color:#ad9400">amarelo</span> = <span style="color:orange">laranja</span>
- <span style="color:#ad9400">amarelo</span> + <span style="color:blue">azul</span> = <span style="color:green">verde</span>

## O método `calibrate`

O outro método necessário cria uma sequência de calibração necessária para estabilizar um cristal de ducktypium.

O método `calibrate` usa um único argumento, uma matriz de números. Com essa matriz de entrada, você deve fazer o seguinte:

- Classifique os números do menor para o maior
- Multiplique cada número na matriz por `3`
- Atribua a matriz resultante à variável `calibrationSequence` da instância `Ducktypium`.

## Exemplo de uso

Quando concluir, sua classe Ducktypium deve se comportar como no exemplo a seguir.

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

O código de exemplo que você pode usar como ponto de partida pode ser encontrado na guia Help (Ajuda). Isso exigirá todas as suas habilidades em JavaScript, mas você consegue! O destino da nuvem está em jogo.

Quando o script `ducktypium.js` estiver pronto, clique no botão _HACK_ para reverter o experimento!

<% } else { %>

Para reverter o experimento ducktypium que falhou, você deve **ativar todos os quatro feixes stasis**, incluindo este aqui (feixe 1). Os feixes 2, 3 e 4 devem ser ativados antes desse feixe.

A cientista chefe disse que **suas colegas possuem os códigos de ativação** necessários para reiniciar os outros três lasers. Procure esses três cientistas no restante do laboratório e **use seus códigos** para reiniciar os outros lasers nesta sala.

Quando os outros três feixes forem ativados novamente, **volte aqui para ativar o feixe final**.

<% } %>