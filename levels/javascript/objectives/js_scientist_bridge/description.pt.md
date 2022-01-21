# Condições complexas

<div class="aside">
<h3>Lista de tarefas</h3>
<ul>
  <li>Crie um arquivo chamado <code>enhancedLifeDetector.js</code></li>
  <li>Imprima o status de vida da árvore apropriado, dependendo de qual argumento de linha de comando seu script recebe (consulte a tabela abaixo)</li>
</ul>
</div>
A ponte final que separa você do botânico também está desativada. Semelhante à ponte oeste, esta falhou porque o **Tree Life Detector** está mal configurado.

Desta vez, você precisará criar uma versão aprimorada do script do Tree Life Detector para estender a ponte.

## Um Tree Life Detector aprimorado

Crie um arquivo chamado `enhancedLifeDetector.js` na pasta de códigos. Este programa usará um único **argumento de linha de comando**, um único dígito `Number` que indica o status atual da vida de uma árvore. Em seguida, ele imprime uma string de texto legível indicando o status atual de uma árvore.

Nas proximidades, você vê um mapeamento de IDs do status de vida de árvores para strings legíveis por humanos com mais status do que apenas `alive` e `other`:

| ID do status de vida da árvore| Status da árvore|
|----------|----------|
| 0| "alive"|
| 1| "flowering"|
| 2| "shedding"|
| mais de 3| "other"|

Quando o seu script for executado, ele deve imprimir a string adequada de texto legível por humanos com base no número de ID que for passado.

Se o script for executado da seguinte forma:

```bash
node treeLifeDetector.js 2
```

Deve imprimir a string `shedding`. Se o número passado não for 0, 1 ou 2, o script deverá imprimir `other`.

Para concluir este desafio, você precisará empregar uma lógica booleana mais complexa do que antes. Consulte a seção **Help** (Ajuda) para obter mais detalhes.

Assim que seu script `enhancedLifeDetector.js` se comportar dessa forma, clique no botão *HACK* para validar seu trabalho!