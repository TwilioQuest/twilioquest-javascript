# Irriga, irriga, plantinha

<div class="aside">
<h3>Lista de tarefas</h3>
<ul>
  <li>Crie um arquivo chamado <code>shouldWater.js</code></li>
  <li>Obtenha dois números como argumentos de linha de comando, o primeiro é o ID do status de vida da árvore e o segundo é o nível de secagem.</li>
  <li>Se o primeiro argumento for <code>0</code> E o segundo for maior que <code>10</code>, imprima o texto <code>WATER</code></li>
</ul>
</div>
Escondido no canto sudeste do laboratório de botânica, você nota outro sistema que foi danificado durante o incidente do ducktypium. Parece que o sistema aspersor automático ficou off-line, o que de alguma forma **desativou a ponte sul**.

Para manter as plantas hidratadas e estender a ponte sul, você precisará instalar o sistema aspersor automático.

## Fazer chover

Uma inspeção do sistema aspersor revela outro problema com a lógica booleana. Para corrigi-lo, crie um arquivo chamado `shouldWater.js` na pasta de códigos. Este script terá **dois argumentos de linha de comando**, ambos sendo números.

* O primeiro argumento é o status de vida de uma planta, `0` significa que a planta está viva
* O segundo é o nível de secagem da planta, acima de `10` significa que a planta precisa de água

Um exemplo de invocação de seu script com uma planta viva (status `0`) e nível de secagem `20` seria assim:

```bash
node shouldWater.js 0 20
```

Para que o sistema aspersor funcione corretamente, este script deve imprimir a string `WATER` somente se o primeiro argumento do script for `0` e o segundo argumento for um número maior que `10`. Ele não deve imprimir nada de outra forma.

Assim que seu código se comportar como descrito acima, clique no botão *HACK* para consertar o aspersor!