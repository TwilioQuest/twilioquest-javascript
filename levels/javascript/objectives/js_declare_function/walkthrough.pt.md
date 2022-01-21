# Saiba como escrever uma função JavaScript

O objetivo deste exercício é aprender a [criar uma função](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) no JavaScript. Uma **função** é um bloco de código reutilizável que você pode **chamar** repetidamente para executar uma tarefa específica.

Em muitos dos exemplos vistos até agora, você pode ter notado que estamos usando uma função integrada ao JavaScript chamada `console.log`. A tarefa desta função é imprimir uma string de texto na janela do terminal. Para eliminar essa barreira, você precisa criar sua própria função.

Crie um arquivo chamado `laserFunction.js` na pasta de códigos. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Neste arquivo, você deve criar uma função chamada `getLaserSetting`. Veja agora um código que você pode usar como ponto de partida. Ele já tem a função definida, mas está retornando o valor errado no momento:

```js
function getLaserSetting() {
  const setting = 42; // <- You'll need to change this line of code!
  return setting;
}

const currentSetting = getLaserSetting();
console.log('The current laser setting is: ' + currentSetting);
```

Você precisa alterar o conteúdo da função declarada acima para atender este objetivo. Os colchetes abertos e fechados (os caracteres `{` e `}`) indicam o início e o fim do código dentro da função. Somente o código escrito entre os caracteres `{` e `}` será executado como parte da função!

A função deve **retornar** o valor correto para a configuração do laser, conforme descrito no objetivo. Use o que você aprendeu sobre variáveis para fazer a mudança necessária. Quando a função estiver funcionando como indicado na guia objetivo, clique no botão *HACK* para validar o trabalho.

## Links úteis

* [JavaScript.info – Guia de funções](https://javascript.info/function-basics)
* [Declaração de função](https://javascript.info/function-basics#function-declaration)
* [Como retornar valores das funções](https://javascript.info/function-basics#returning-a-value)
* [Guia de funções MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)