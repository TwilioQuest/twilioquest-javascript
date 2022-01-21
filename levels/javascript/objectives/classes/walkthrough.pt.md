# Classe alta

O objetivo deste exercício é familiarizar-se com as [classes](https://javascript.info/class) JavaScript. "Classes" são novos tipos de objetos que você pode criar em seu próprio código.

A maioria do trabalho no laboratório JavaScript usou objetos incorporados e tipos de dados "primitivos" como números, strings e booleanos. As classes representam conceitos de dados mais complexos específicos do seu código, como usuários, postagens em blogs, curtidas ou assinaturas, por exemplo. Ao contrário dos [objetos literais](https://javascript.info/object#literals-and-properties), as classes também podem ter comportamentos que operam nos dados.

Neste exercício, você precisa [criar uma classe](https://javascript.info/class) com base na especificação do objetivo.

Crie um arquivo chamado `classes.js` na pasta de códigos. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Neste arquivo, você deve criar uma classe chamada `Materializer`. Veja agora um código que você pode usar como ponto de partida. Ele já tem a classe definida, mas ainda não funciona conforme descrito no objetivo:

```js
class Materializer {
  constructor(targetName) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
```

Quando a função estiver funcionando como indicado no objetivo, clique no botão *HACK* para validar o trabalho.

## Links úteis

* [JavaScript.info – Classes](https://javascript.info/class)
* [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)