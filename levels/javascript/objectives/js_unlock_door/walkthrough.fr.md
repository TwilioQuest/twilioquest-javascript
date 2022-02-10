# Apprendre à exécuter un code JavaScript

L'objectif de cet exercice est de vous familiariser avec la création et l'exécution de programmes JavaScript sur votre ordinateur. Pour cet exercice, nous vous fournirons tout le code dont vous avez besoin pour relever le défi. Cependant, les prochaines fois, vous allez devoir écrire le reste du code vous-même&nbsp;!

<details>
<summary>Étape 1: Créer un fichier de code JavaScript</summary>
Vous devez d'abord créer un nouveau fichier sur votre ordinateur, appelé `sayPlease.js` dans le dossier que vous avez créé en tant qu'espace de travail TwilioQuest. Pour rappel, ce dossier se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

L'**extension de fichier** (la partie `.js`) indique le type de fichier que vous créez. Les fichiers audio peuvent avoir une extension `.mp3`. Un document Microsoft Word peut avoir une extension `.docx`. Les fichiers JavaScript ont (généralement) une extension `.js`.

Nous vous conseillons de créer ces fichiers à l'aide de l'interface de terminal, car vous aurez à l'utiliser plus tard pour exécuter votre code JavaScript.

Pour créer le fichier sous Mac ou Linux, utilisez les commandes suivantes dans l'application de terminal&nbsp;:

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
touch sayPlease.js
```

Dans PowerShell sur Windows, utilisez les commandes suivantes&nbsp;:

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
New-Item sayPlease.js
```

</details>
<details>
<summary>Étape 2: Ouvrir le fichier et écrire le code de la solution</summary>
Après avoir créé votre fichier JavaScript, vous devez y insérer du code&nbsp;! De la même manière que vous utilisez Photoshop pour ouvrir et modifier un fichier d'image, vous aurez besoin d'un programme installé sur votre ordinateur pour modifier les fichiers de code. Dans le domaine de la programmation, ces outils sont appelés **environnements de développement intégré** (IDE) ou **éditeurs de texte**.

Si vous n'avez pas installé l'un de ces programmes, nous vous recommandons d'essayer [Visual Studio Code](https://code.visualstudio.com/). VS Code est un éditeur de texte de programmation relativement simple, mais doté de nombreuses fonctionnalités prêtes à l'emploi et capable de faire des choses très complexes et puissantes une fois que vous l'avez pris en main.

Ouvrez le fichier `sayPlease.js` à l'aide de VS Code ou de l'éditeur de texte de votre choix. Au départ, le fichier sera probablement vide.

Pour ce défi, nous vous fournissons l'ensemble du code dont vous aurez besoin. Prenez le code ci-dessous et copiez-le dans le fichier. Ne vous inquiétez pas si vous ne comprenez pas encore de quoi il s'agit. Dans un instant, vous verrez qu'il utilise une fonction JavaScript intégrée appelée `console.log` pour imprimer une ligne de texte dans la fenêtre du terminal&nbsp;:

```js
console.log('Glen, will you please open the barrier?');
```

Une fois que vous avez ajouté ce code au fichier, assurez-vous d'**enregistrer les modifications que vous avez apportées**&nbsp;! Vous êtes maintenant prêt à exécuter le code et à voir ce qu'il fait.

</details>
<details>
<summary>Étape 3: Exécuter le code et s'assurer qu'il fonctionne</summary>
Nous allons maintenant utiliser Runtime Node.js que vous avez installé pour exécuter le code dans `sayPlease.js`. En général, vous utiliserez l'application d'invite de commande de votre ordinateur à cet effet (Terminal.app sur Mac ou PowerShell sur Windows).

Ouvrez votre application Terminal et entrez la commande suivante pour vous assurer que votre «&nbsp;répertoire de travail actuel&nbsp;» correspond bien au dossier dans lequel vous avez créé `sayPlease.js`.

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
```

Ensuite, utilisez la commande `node` pour exécuter votre code JavaScript&nbsp;:

```bash
node sayPlease.js
```

Après avoir exécuté la commande ci-dessus, vous devriez voir la requête polie que vous destinez à Glen imprimée sur la console.

</details>
Dans TwilioQuest, vous serez invité à créer, modifier et exécuter des fichiers de code comme décrit ci-dessus.

Une fois que votre fichier `sayPlease.js` peut s'exécuter et imprimer le message requis, cliquez sur le bouton *HACK* pour soumettre votre demande au service informatique.