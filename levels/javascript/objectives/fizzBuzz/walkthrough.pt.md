# Um truque comum

Este problema é uma variação do [algoritmo de entrevista comumente usado, conhecido como "Fizz Buzz"](https://learnjswith.me/javascript-fizzbuzz/). Não é um algoritmo particularmente útil, mas é uma boa maneira de consolidar seu conhecimento sobre condicionais e aprender sobre um novo tipo de operador!

## Um número é divisível? Use o operador remainder (módulo) de resto

Seu script deve detectar se um número é divisível por outro. Existe um operador em JavaScript, e na maioria das outras linguagens, que permite detectar isso. É chamado de `Remainder Operator`. Esse operador é representado por `%` e retorna o resto que sobrou da divisão de dois números.

Por exemplo:

```js
12 % 5 === 2;
4 % 2 === 0;
12 % 3 === 0;
```

Se um número for divisível igualmente por outro número, o resultado do operador `%` será `0`.

## Código inicial

Crie outro arquivo JavaScript neste local:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>/fizzBuzz.js`.

Você pode usar o seguinte como código inicial:

```js
const numberInput = Number(process.argv[2]);
let output = '';

if (false) {
  output += 'Java';
}

if (false) {
  output += 'Script';
}

if (false) {
  output = String(numberInput);
}

console.log(output);
```

Teste o código em diferentes entradas com:

```bash
node fizzBuzz.js 15
```

Quando achar que o código está funcionando corretamente, clique no botão *HACK*!