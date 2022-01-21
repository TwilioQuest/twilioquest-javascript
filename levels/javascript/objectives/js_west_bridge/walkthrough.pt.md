# Ramifique seu código, ou senão!

O objetivo deste exercício é aprender a usar uma [instrução else](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals). Anteriormente, você usou uma [instrução if](https://javascript.info/ifelse#the-if-statement) para especificar um bloco de código que seria executado se uma determinada condição fosse atendida. Uma instrução `else` permite especificar o código que é executado em qualquer outro caso.

[Saiba mais sobre como uma instrução if/else funciona no MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Veja agora um exemplo rápido de uma instrução if que tem uma oração `else`:

```js
const luckyNumber = 7;

if (luckyNumber === 7) {
  console.log('Yup, 7 is a lucky number.');
} else {
  console.log('I think only 7 is a lucky number, right?');
}
```

Neste exemplo, a segunda string será impressa se o `luckyNumber` estiver definido como qualquer outro número além de `7`.

## Como consertar o Tree Life Detector

Para estender a ponte, você precisa criar um arquivo chamado `treeLifeDetector.js` na pasta de código. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Você precisa trabalhar com um [argumento de linha de comando](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/), um número de dígito único que especifica se uma árvore está ativa ou em algum outro status.

Veja agora um código que você pode usar como ponto de partida, que obtém o valor do primeiro argumento passado para o seu script.

```js
// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

```

Você pode testar o código acima executando-o assim. O seguinte deve imprimir a string `alive`:

```bash
node treeLifeDetector.js 0
```

Isso deve imprimir o texto `other`:

```bash
node treeLifeDetector.js 3
```

Depois que o script estiver funcionando conforme descrito no objetivo, clique em *HACK* para validar o trabalho!

## Recursos úteis

* [Introdução ao MDN para condicionais](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info – Instrução else](https://javascript.info/ifelse#the-else-clause)
* [MDN – Tipos de dados JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)