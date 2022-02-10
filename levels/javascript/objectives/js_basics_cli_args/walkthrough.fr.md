# Gagner les arguments

Le but de cet objectif est de vous familiariser avec le concept des [arguments de ligne de commande](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/). Il s'agit de données transmises à votre code JavaScript lors de son exécution, afin d'en préciser le contexte.

Jusqu'à présent, vous avez exécuté vos scripts de test avec une commande qui ressemble à celle-ci.

```bash
node someProgram.js
```

Ensuite, votre code s'exécute et applique les instructions que vous avez écrites.

Cependant, il est souvent utile de transmettre certaines données initiales dans un programme que vous avez écrit. Ces données initiales s'appellent **arguments**. Pour exécuter un script avec des arguments, saisissez du texte supplémentaire après le nom de votre fichier de code, séparé par des espaces. Voici un exemple d'exécution d'un script avec trois arguments&nbsp;:

```bash
node someProgram.js "argument one" "another argument" allOneWordNoQuotes
```

Pour accéder à ces arguments dans votre code, utilisez une liste spéciale nommée [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv).

Dans cet objectif, vous devez écrire un programme qui fonctionne avec un argument de ligne de commande. Pour vous aider, voici le code dont vous avez besoin comme point de départ&nbsp;:

```js
// The line of code below reads in the value of the argument passed in after
// the name of your script
const argumentValue = process.argv[2];

// This line of code converts the argument to a numeric value
const numberValue = Number(argumentValue);

// This line of code divides the input number by two, and stores the result in
// a variable named "result"
const result = numberValue / 2;

// You need to finish the line of code below! How would you print out the
// result to the terminal window without hard coding the number 42?
console.log(42);
```

Ajoutez le code ci-dessus à un fichier appelé `divideByTwo.js` dans votre répertoire de code. Pour référence, votre dossier de code est disponible ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Une fois cette opération effectuée, vous devez modifier la dernière ligne du programme pour imprimer le résultat de la division du nombre saisi par deux. Pour tester votre code, exécutez-le à partir d'un terminal comme celui-ci.

```bash
node divideByTwo.js 400
```

Si votre code est correct, il imprime le nombre `200` après l'exécution. N'oubliez pas que vous devez modifier le code de démarrage ci-dessus pour que cela fonctionne&nbsp;!

Une fois que votre script fonctionne correctement, cliquez sur le bouton *HACK*.

## Ressources utiles

* [Arguments de ligne de commande Node.js](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
* [Documents de référence pour process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)