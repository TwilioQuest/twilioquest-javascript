# Objetos mais sofisticados

O objetivo deste exercício é familiarizar-se com a [notação literal de objetos](https://javascript.info/object#literals-and-properties) JavaScript.

A maioria do trabalho no laboratório JavaScript usou objetos incorporados e tipos de dados "primitivos" como números, strings e booleanos. Às vezes, seu código precisa ser capaz de representar conceitos de dados mais complexos específicos ao seu código, como usuários, postagens em blogs, curtidas ou assinaturas, por exemplo.

Neste exercício, você aprenderá uma ferramenta à sua disposição para criar dados mais complexos, um [objeto literal](https://javascript.info/object#literals-and-properties). Um objeto criado dessa maneira pode ter suas próprias propriedades e ser atribuído a uma única variável.

Crie um arquivo chamado `construction.js` na pasta de códigos. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Neste arquivo, você deve criar uma função chamada `construct`. Veja agora um código que você pode usar como ponto de partida. Ele já tem a função definida, mas ainda não funciona conforme descrito no objetivo:

```js
function construct(name) {
  let person = {};

  return person;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name); // should be "Kevin"
console.log('duration is: ' + somePerson.duration); // should be 1000
```

Quando a função estiver funcionando como indicado no objetivo, clique no botão *HACK* para validar o trabalho.

## Links úteis

* [JavaScript.info – Notação literal do objeto](https://javascript.info/object#literals-and-properties)
* [MDN – Inicialização de objeto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
* [JavaScript.info – Como retornar valores das funções](https://javascript.info/function-basics#returning-a-value)
* [MDN – Guia de funções](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)