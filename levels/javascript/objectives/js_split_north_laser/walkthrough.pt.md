<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.northWing &&
worldState.northWing.hadSavedConversation;
%>

# Ajuda objetiva

<% if (isObjectiveReady) { %>

Neste objetivo, você deve combinar o que aprendeu sobre objetos e classes na ala norte do laboratório para criar uma solução.

Neste exercício, você precisa [criar uma classe](https://javascript.info/class) com base na especificação do objetivo.

Crie um arquivo chamado `targetingSolution.js` na pasta de códigos. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Neste arquivo, você deve criar uma classe chamada `TargetingSolution`. Veja agora um código que você pode usar como ponto de partida. Ele já tem a classe definida, mas ainda não funciona conforme descrito no objetivo:

```js
class TargetingSolution {
  constructor(config) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900,
});

console.log(m.target()); // would print "(10, 15, 900)"
```

Quando a função estiver funcionando como indicado no objetivo, clique no botão _HACK_ para validar o trabalho. Você consegue!

## Links úteis

- [JavaScript.info – Classes](https://javascript.info/class)
- [MDN – Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info – Notação literal do objeto](https://javascript.info/object#literals-and-properties)
- [MDN – Inicialização de objeto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

<% } else { %>

Você examina os controles desse feixe, mas eles estão bloqueados no momento. Você precisará do **código de acesso do físico teórico** para ativar esse laser.

O físico teórico provavelmente está na **ala norte do laboratório**, onde eles estudaram a capacidade do ducktypium de dobrar o espaço-tempo e manipular a matéria.

**Fale com o físico teórico** para receber o código de acesso para este feixe.

<% } %>