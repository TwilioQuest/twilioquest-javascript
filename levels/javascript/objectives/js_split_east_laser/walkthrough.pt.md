\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.eastWing \&\& worldState.eastWing.hadSavedConversation; %>

# Ajuda objetiva

\<% if (isObjectiveReady) { %>

Para concluir este objetivo, você deve combinar várias técnicas aprendidas enquanto salva o engenheiro elétrico do **Loop infinito**.

Crie um arquivo chamado `laserPower.js` na pasta de códigos. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Neste arquivo, você deve criar uma função chamada `calculatePower`. Veja agora um código que você pode usar como ponto de partida. Ele já tem a função definida, mas ainda não funciona conforme descrito no objetivo:

```js
function calculatePower(powerSettings) {
  let totalPower = 0;

  return totalPower;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower); // should be 24
```

Todas as habilidades necessárias para superar este desafio foram exigidas para você chegar a este ponto. Você consegue!

Depois que sua função `calculatePower` estiver funcionando como descrito no objetivo, clique no botão _HACK_.

## Links úteis

- [JavaScript.info – Função de redução de matriz](https://javascript.info/array-methods#reduce-reduceright)
- [JavaScript.info – Função do mapa da matriz](https://javascript.info/array-methods#map)
- [JavaScript.info – Instruções if](https://javascript.info/ifelse)
- [JavaScript.info – Como retornar valores das funções](https://javascript.info/function-basics#returning-a-value)
- [MDN – Guia de funções](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

\<% } else { %>

Você examina os controles desse feixe, mas eles estão bloqueados no momento. Você precisará do **código de acesso do engenheiro elétrico** para ativar esse laser.

O engenheiro elétrico provavelmente está a bordo do cargueiro de suprimentos acoplado na **ala leste do laboratório**. Eles estavam processando uma nova remessa de suprimentos quando ocorreu a explosão.

**Fale com o engenheiro elétrico** para receber o código de acesso para este feixe.

\<% } %>