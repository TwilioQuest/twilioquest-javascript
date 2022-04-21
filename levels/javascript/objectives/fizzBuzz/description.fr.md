# Un petit «&nbsp;buzz&nbsp;» dans les oreilles

<div class="aside">
<h3>Liste de tâches</h3>
<ul>
  <li>Créer un fichier appelé <code>fizzBuzz.js</code></li>
  <li>Obtenir un nombre comme argument de ligne de commande</li>
  <li>Imprimer <code>Java</code>, <code>Script</code>, <code>JavaScript</code>, ou le numéro lui-même comme décrit dans le tableau ci-dessous.</li>
</ul>
</div>
Dans une section presque vide du laboratoire de botanique, vous trouvez un vieux coffre poussiéreux. De toute évidence, il n'a pas été ouvert depuis un certain temps et vous vous demandez ce qu'il peut bien renfermer.

Une inspection rapide du mécanisme de verrouillage suggère que son système heuristique interne est probablement corrompu. Le remplacer par un programme fonctionnel devrait permettre d'ouvrir la serrure.

## Réparation du mécanisme de verrouillage du coffre

Créez un fichier appelé `fizzBuzz.js` dans votre dossier de code. Votre programme doit prendre un seul argument de ligne de commande, et il doit s'agir d'un nombre entier. Voici un exemple de ce à quoi une invocation peut ressembler&nbsp;:

```bash
node fizzBuzz.js 15
```

Votre programme doit imprimer l'un des quatre éléments, selon le nombre transmis. Voici ce que votre programme doit imprimer et dans quelles circonstances&nbsp;:

| Numéro d'entrée| Valeur imprimée|
|----------|----------|
| Divisible par 3| «&nbsp;Java&nbsp;»|
| Divisible par 5| «&nbsp;Script&nbsp;»|
| Divisible par 3 ET 5| «&nbsp;JavaScript&nbsp;»|
| NON divisible par 3 OU 5| Numéro d'entrée|

Par exemple&nbsp;:

* Si l'argument est `3`, votre programme doit imprimer `Java`
* Si l'argument est `5`, votre programme doit imprimer `Script`
* Si l'argument est `15`, votre programme doit imprimer `JavaScript`
* Si l'argument est `7`, votre programme doit imprimer `7`

Une fois que votre programme fonctionne comme décrit ci-dessus, cliquez sur le bouton *HACK*&nbsp;!