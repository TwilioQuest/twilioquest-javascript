# Literalmente um objeto

<div class="aside">
<h3>Lista de tarefas</h3>
<ul>
  <li>Crie um arquivo chamado <code>construction.js</code>.</li>
  <li>Crie uma função chamada <code>construct</code> que usa um único argumento de string.</li>
  <li>Sua função deve retornar um objeto conforme descrito abaixo.</li>
</ul>
</div>
A ala norte do laboratório contém um estranho dispositivo no meio da sala, cuja finalidade não era imediatamente óbvia quando você entrou. Inspecionando o console à sua frente, você deduz que este é um painel de controle para um **instanciador de matéria**. Deve ser a grande câmara no centro da sala!

O console, no entanto, é preenchido com registros de erros indicando que foi danificado durante a explosão do laboratório. Se você conseguir ativar este console (e outro igual) novamente, a câmara no meio do laboratório deverá funcionar novamente.

## Criar um objeto literal

O instanciador de matéria é capaz de criar novos objetos do nada! A função do JavaScript que você precisará corrigir neste objetivo também é responsável pela fabricação de objetos, usando a [notação literal de objeto](https://javascript.info/object#literals-and-properties).

Crie um arquivo chamado `construction.js` na pasta de códigos. Dentro desse arquivo, crie uma função chamada `construct` que retorne um [objeto literal](https://javascript.info/object#literals-and-properties) com as seguintes propriedades:

| Propriedade| Tipo| Valor| Observações|
|----------|----------|----------|----------|
| name| string| Consulte as observações| Este será o primeiro argumento passado para a sua função `construct`|
| material| string| "human"| |
| montagem| booleano| verdadeiro| |
| duração| número| 1000| |

Depois de escrever uma função que possa executar a tarefa descrita acima, clique no botão *HACK*!