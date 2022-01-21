# Primeira classe

<div class="aside">
<h3>Lista de tarefas</h3>
<ul>
  <li>Crie um arquivo chamado <code>classes.js</code>.</li>
  <li>Crie uma classe chamada <code>Materializer</code> que usa um único argumento de string.</li>
  <li>Sua função deve retornar um objeto conforme descrito abaixo.</li>
</ul>
</div>
A ala norte do laboratório contém um estranho dispositivo no meio da sala, cuja finalidade não era imediatamente óbvia quando você entrou. Inspecionando o console à sua frente, você deduz que este é um painel de controle para um **instanciador de matéria**. Deve ser a grande câmara no centro da sala!

O console, no entanto, é preenchido com registros de erros indicando que foi danificado durante a explosão do laboratório. Se você conseguir ativar este console (e outro igual) novamente, a câmara no meio do laboratório deverá funcionar novamente.

## Consertar o console com classes

Para corrigir esse componente do instanciador de matéria, você deve substituir como parte do código JavaScript que fornece um objeto de configuração usado no processo de transformação.

Crie um arquivo chamado `classes.js` na pasta de códigos. Dentro desse arquivo, [crie uma classe](https://javascript.info/class) chamada `Materializer`.

Ela deve ter:

- uma propriedade chamada `target` que é definida igual ao primeiro argumento do construtor
- uma propriedade `activated` que é padronizada como `false`
- uma função de instância chamada `activate` que define `activated` como verdadeiro
- uma função de instância chamada `materialize` que retorna o valor da propriedade `target` de uma instância se a propriedade `activated` estiver definida como verdadeiro. Caso contrário, retorna `undefined` (nada é retornado).

Depois de criar uma classe `Materializer` que atenda aos critérios acima, clique em *HACK* para validar seu trabalho!