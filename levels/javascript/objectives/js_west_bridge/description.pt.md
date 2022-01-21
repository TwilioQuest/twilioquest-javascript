# Deixe que haja vida

<div class="aside">
<h3>Lista de tarefas</h3>
<ul>
  <li>Crie um arquivo chamado <code>treeLifeDetector.js</code></li>
  <li>Se for passado o número <code>0</code> como um argumento de linha de comando, imprima <code>alive</code></li>
  <li>Se for passado qualquer outro número como um argumento de linha de comando, imprima <code>other</code></li>
</ul>
</div>
Enquanto procura meios de estender a ponte oeste no laboratório, você descobre este painel de controle. Aparentemente, a ponte oeste está desativada porque o sistema **Tree Life Detector** do laboratório foi danificado.

**Você precisará reparar o Tree Life Detector** antes de continuar em direção ao botânico.

## Como consertar o Tree Life Detector

Crie um arquivo chamado `treeLifeDetector.js` na pasta de códigos. Este programa usará um único **argumento de linha de comando**, um único dígito `Number` que indica o status atual da vida de uma árvore. Você vê um mapeamento atual de IDs de status de vida da árvore para strings legíveis por humanos postado ao lado do painel de controle:

| ID do status de vida da árvore| Status da árvore|
|----------|----------|
| 0| "alive"|
| 1| "other"|
| 2| "other"|
| mais de 3| "other"|

Quando o seu script for executado, ele deve imprimir a string adequada de texto legível por humanos com base no número de ID que for passado.

Se o script for executado da seguinte forma:

```bash
node treeLifeDetector.js 0
```

Deve imprimir a string `alive`.

Se o script for executado com qualquer outro número, assim:

```bash
node treeLifeDetector.js 2
```

Deve imprimir a string `other`.

Assim que seu script `treeLifeDetector.js` se comportar dessa forma, clique no botão *HACK* para validar seu reparo!