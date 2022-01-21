# Saiba como escrever uma função JavaScript

O objetivo deste exercício é aprender a [criar uma função](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) que usa **argumentos** (também chamados de "parâmetros"). Um **argumento** é um dado de entrada que as funções podem usar para produzir diferentes saídas.

Crie um arquivo chamado `politeLasers.js` na pasta de códigos. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Neste arquivo, você deve criar uma função chamada `getLaserSetting`. Veja agora um código que você pode usar como ponto de partida. Ele já tem a função definida, mas ainda não funciona conforme descrito no objetivo:

```js
function getLaserSetting(magicWord) {
  if (magicWord === 'the magic word here') {
    return 'what should this be?';
  } else {
    return 'ON';
  }
}

const currentSetting = getLaserSetting('right now!');
console.log('The current laser setting is: ' + currentSetting);
```

No objetivo, ele diz que a função deve retornar a string `OFF` quando o primeiro argumento para a função (`magicWord` no exemplo acima) for a string `please`. Ela deve retornar `ON` com qualquer outra entrada.

Quando a função estiver funcionando como indicado no objetivo, clique no botão *HACK* para validar o trabalho.

## Links úteis

* [JavaScript.info – Guia de funções](https://javascript.info/function-basics)
* [Declaração de função](https://javascript.info/function-basics#function-declaration)
* [Como retornar valores das funções](https://javascript.info/function-basics#returning-a-value)
* [Guia de funções MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)