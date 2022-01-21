# Aprendizagem sobre a instrução if

O objetivo aqui é aprender como executar condicionalmente o código usando uma [instrução if](https://javascript.info/ifelse#the-if-statement). Em programação, geralmente queremos executar o código somente quando determinadas condições são atendidas, como se um usuário está conectado ou se um determinado arquivo existe.

[Saiba mais sobre como uma instrução if funciona no MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Veja agora um exemplo rápido de uma instrução if que usa o [operador de comparação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) (o operador `===`) para ver se duas cadeias de texto são iguais e imprimir algum texto, caso sejam:

```js
const animal = 'Dog';

if (animal === 'Dog') {
  console.log('woof!');
}
```

Uma instrução de comparação avalia para um [booleano](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) `true` ou `false`. Se a instrução for verdadeira, o código dentro da instrução if (as partes dentro das chaves `{` `}`) será executado.

## Construção de pontes

Para estender a ponte, você precisa criar um arquivo chamado `northBridgeControl.js` na pasta de código. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Assim como você fez quando recuperou a senha do escritório da cientista líder, você precisará trabalhar com [argumentos de linha de comando](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/). Seu código imprimirá uma mensagem específica se e somente se um determinado argumento for passado.

Veja agora um código que você pode usar como ponto de partida, que obtém o valor do primeiro argumento passado para o seu script. No entanto, a instrução if **não funcionará** como escrito atualmente. Você precisa alterá-la para atender ao objetivo.

```js
const argumentValue = process.argv[2];

// Modify the if statement below to execute if and only if "argumentValue" is
// equal to the string "EXTEND"
if (false) {
  console.log('Extending bridge!');
}
```

Você pode testar o código acima executando-o assim. Isso deve imprimir a mensagem:

```bash
node northBridgeControl.js EXTEND
```

Isso não deve imprimir nada:

```bash
node northBridgeControl.js GO
```

Depois que o script estiver funcionando conforme descrito no objetivo, clique em *HACK* para validar o trabalho!

## Recursos úteis

* [Introdução ao MDN para condicionais](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info – Instrução if](https://javascript.info/ifelse#the-if-statement)
* [MDN – Tipos de dados JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)