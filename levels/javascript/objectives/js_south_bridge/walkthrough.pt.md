# Lógica booleana mais complexa

Algumas comparações booleanas são mais complexas do que outras. Você pode ter que avaliar várias condições para determinar se ou como ramificar seu código. Para fazer isso, você precisa usar os operadores booleanos E (`&&`) e OU (`||`). Às vezes, são chamados de **operadores lógicos**.

[Saiba mais sobre esses operadores em JavaScript.info](https://javascript.info/logical-operators).

Veja agora um exemplo rápido de uma instrução if com comparações mais complexas.

```js
const name = 'Cedric';
const isRobot = true;
const awesomenessLevel = 1000;

if (
  name === 'Cedric' &&
  isRobot &&
  awesomenessLevel > 10
) {
  console.log('Yup, that is our Cedric!');
}
```

## Aspersores no teto

Para consertar o sistema de aspersão, crie um arquivo chamado `shouldWater.js` na pasta de códigos. A pasta de códigos está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Desta vez, você precisa considerar dois argumentos em seu script. Use o código abaixo como ponto de partida:

```js
const lifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

// Your if statement goes below...
if (false) {
  console.log('WATER');
}
```

Você pode testar o código acima executando-o da seguinte forma:

```bash
node shouldWater.js 1 20
```

O acima não deve imprimir nada, o nível de secagem dele está acima de 10, mas o status de vida é 1 e não 0.

Isso deve imprimir `WATER`, uma vez que o primeiro argumento é `0` e o segundo argumento é maior que `10`:

```bash
node shouldWater.js 0 11
```

Depois que o script estiver funcionando conforme descrito no objetivo, clique em *HACK* para validar o trabalho!

## Recursos úteis

* [Introdução ao MDN para condicionais](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info – Operadores lógicos](https://javascript.info/logical-operators)