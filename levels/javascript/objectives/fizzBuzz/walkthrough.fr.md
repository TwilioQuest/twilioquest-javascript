# Une astuce bien connue

Ce problème est une variante de l'[algorithme de questions couramment utilisé, connu sous le nom de «&nbsp;Fizzbuzz&nbsp;»](https://learnjswith.me/javascript-fizzbuzz/). Il ne s'agit pas d'un algorithme particulièrement utile, mais c'est un bon moyen de renforcer vos connaissances sur les conditionnelles et d'en apprendre davantage sur un nouveau type d'opérateur&nbsp;!

## Ce nombre est-il divisible&nbsp;? Utiliser l'opérateur remainder (module)

Votre script doit détecter si un nombre est divisible par un autre. Il existe un opérateur dans JavaScript (et dans la plupart des autres langages) qui vous permettra de détecter ceci. C'est ce que l'on appelle le `Remainder Operator`. Cet opérateur est représenté par le signe `%` et renvoie le reste résultant de la division de deux nombres.

Par exemple&nbsp;:

```js
12 % 5 === 2;
4 % 2 === 0;
12 % 3 === 0;
```

Si un nombre est divisible de manière égale par un autre, le résultat de l'opérateur `%` sera de `0`.

## Code de démarrage

Créez un nouveau fichier JavaScript à cet emplacement&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>/fizzBuzz.js`.

Vous pouvez utiliser les éléments suivants comme code de démarrage&nbsp;:

```js
const numberInput = Number(process.argv[2]);
let output = '';

if (false) {
  output += 'Java';
}

if (false) {
  output += 'Script';
}

if (false) {
  output = String(numberInput);
}

console.log(output);
```

Testez votre code par rapport à différentes entrées avec&nbsp;:

```bash
node fizzBuzz.js 15
```

Une fois que vous avez l'impression que votre code tourne correctement, cliquez sur le bouton *HACK*&nbsp;!