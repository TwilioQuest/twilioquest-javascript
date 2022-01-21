# Ramifique seu código, ou senão!

O objetivo deste exercício é aprender a usar uma [instrução else-if](https://javascript.info/ifelse#several-conditions-else-if). Você usa essas instruções quando sua lógica condicional precisa ramificar em muitas direções diferentes.

[Saiba mais sobre como uma declaração else-if funciona no MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Veja agora um exemplo rápido de uma instrução if que usa else-if:

```js
const ninjaTurtle = 'Leonardo';

if (ninjaTurtle === 'Leonardo') {
  console.log('leads');
} else if (ninjaTurtle === 'Donatello') {
  console.log('does machines');
} else if (ninjaTurtle === 'Raphael') {
  console.log('cool, but cruel');
} else if (ninjaTurtle === 'Michelangelo') {
  console.log('party dude');
} else {
  console.log('not a ninja turtle');
}
```

Neste exemplo, uma string diferente é impressa dependendo do valor atual da variável `ninjaTurtle`.

## Como consertar o Tree Life Detector

Para estender a ponte, você precisa criar um arquivo chamado `enhancedLifeDetector.js` na pasta de código. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Você precisa trabalhar com um [argumento de linha de comando](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/), um número de dígito único que especifica se uma árvore está ativa ou em algum outro status.

Veja agora um código que você pode usar como ponto de partida, que obtém o valor do primeiro argumento passado para o seu script.

```js
// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

```

Você pode testar o código acima executando-o assim. O seguinte deve imprimir a string `flowering`:

```bash
node enhancedLifeDetector.js 1
```

Isso deve imprimir o texto `other`:

```bash
node enhancedLifeDetector.js 3
```

Os outros status potenciais, por número, são listados na tabela na guia **Objetivo**.

Depois que o script estiver funcionando conforme descrito no objetivo, clique em *HACK* para validar o trabalho!

## Recursos úteis

* [Introdução ao MDN para condicionais](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info – Instrução else-if](https://javascript.info/ifelse#several-conditions-else-if)