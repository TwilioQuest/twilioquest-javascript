\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.southWing \&\& worldState.southWing.hadSavedConversation; %>

# Reiniciar o laser

\<% if (isObjectiveReady) { %>

Após aprender sobre a lógica condicional na ala sul, você estará pronto para enfrentar este desafio! Crie um arquivo chamado `sortOrder.js` na pasta de códigos, localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Use o seguinte código como ponto de partida:

```js
const firstValue = process.argv[2];
const secondValue = process.argv[3];

// Your comparison code (if statements) go here
```

O código precisará imprimir um dos três números, com base no primeiro valor anterior, igual ou posterior ao segundo valor em ordem alfabética. Se o script foi executado da seguinte forma:

```bash
node sortOrder.js cats dogs
```

Ele deve imprimir `-1`, já que `cats` vem antes de `dogs` em ordem alfabética. Se tiver sido executado da seguinte forma:

```bash
node sortOrder.js cats CATS
```

Ele deve imprimir `0`, uma vez que as strings `cats` e `CATS` são equivalentes em ordem alfabética. Por fim, se ele tiver sido executado da seguinte forma:

```bash
node sortOrder.js dogs cats
```

Ele deve imprimir `1`, já que `dogs` vem depois de `cats` em ordem alfabética.

Seu código precisará [comparar strings alfabeticamente, como demonstrado aqui](https://javascript.info/comparison#string-comparison). Além disso, talvez seja necessário converter as strings para a mesma caixa antes da comparação usando [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

Isso deve ser muito semelhante às tarefas que você precisava concluir na ala sul do laboratório. Volte e consulte esse código se precisar.

Clique em _HACK_ quando o script se comportar como descrito no objetivo. Você consegue!

## Recursos úteis

- [Referência dos condicionais MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [JavaScript.info – comparação de string](https://javascript.info/comparison#string-comparison)

\<% } else { %>

Você examina os controles desse feixe, mas eles estão bloqueados no momento. Você precisará **do código de acesso do botânico** para ativar este laser.

O botânico provavelmente está na **ala sul do laboratório**, onde eles haviam estudado o efeito do ducktypium na vida das plantas.

**Fale com o botânico** para receber o código de acesso para este feixe.

\<% } %>