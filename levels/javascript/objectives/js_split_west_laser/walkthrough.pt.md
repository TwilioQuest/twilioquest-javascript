\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.beamTwoOnline \&\& worldState.beamThreeOnline \&\& worldState.beamFourOnline; %>

# Ajuda objetiva

\<% if (isObjectiveReady) { %>

Esta tarefa exigirá tudo o que você aprendeu sobre JavaScript até agora! Classes, métodos de matriz e lógica booleana serão necessários.

Crie um arquivo chamado `ducktypium.js` na pasta de códigos. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Neste arquivo, você deve criar uma classe chamada `Ducktypium`. Veja agora um código que você pode usar como ponto de partida. Ele já tem a classe definida, mas ainda não funciona conforme descrito no objetivo:

```js
class Ducktypium {
  constructor(color) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
```

Lembre-se de que você pode rever as outras alas do laboratório para praticar qualquer uma das habilidades que aprendeu anteriormente.

Após implementar a classe `Ducktypium` conforme descrito no objetivo, clique em _HACK_ e inverta o experimento! Você conseguiu!

## Links úteis

- [JavaScript.info – Referência completa](https://javascript.info/)
- [Referência de JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

\<% } else { %> Você não poderá concluir este objetivo até:

1. Encontrar os três cientistas perdidos
2. Usar os códigos de ativação para ativar os três outros feixes nesta sala

Explorar o resto do laboratório. Cada cientista pode ser encontrado nas áreas ao sul, leste e oeste da sala de experimentos principal (na qual você está agora).

Quando os outros três feixes forem ativados novamente, **volte aqui para ativar o feixe final**. \<% } %>