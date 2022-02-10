# Logique booléenne plus complexe

Certaines comparaisons booléennes sont plus complexes que d'autres. Vous devrez peut-être évaluer plusieurs conditions pour déterminer si votre code doit être ramifié et comment. Pour ce faire, vous devrez utiliser les opérateurs booléens AND ( `&&` ) et OR ( `||` ). Ils sont parfois appelés **opérateurs logiques**.

[Pour en savoir plus sur ces opérateurs, rendez-vous sur JavaScript.info](https://javascript.info/logical-operators).

Voici un exemple rapide d'instruction if avec des comparaisons plus complexes.

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

## Au fil de l'eau

Pour réparer le système d'arrosage, créez un fichier appelé `shouldWater.js` dans votre dossier de code. Votre dossier de code se trouve ici&nbsp;:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Cette fois-ci, vous devez prendre en compte deux arguments dans votre script. Utilisez le code ci-dessous comme point de départ&nbsp;:

```js
const lifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

// Your if statement goes below...
if (false) {
  console.log('WATER');
}
```

Pour tester le code ci-dessus, exécutez-le comme suit&nbsp;:

```bash
node shouldWater.js 1 20
```

La condition ci-dessus ne doit rien imprimer&nbsp;: son taux de sécheresse est supérieur à&nbsp;10, mais son état de vie est&nbsp;1 et non&nbsp;0.

Cette condition doit imprimer `WATER`, car le premier argument est `0` et le deuxième argument est supérieur à `10`&nbsp;:

```bash
node shouldWater.js 0 11
```

Une fois que votre script fonctionne comme décrit dans l'objectif, cliquez sur *HACK* pour valider votre travail&nbsp;!

## Ressources utiles

* [Introduction MDN aux conditions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info&nbsp;: Opérateurs logiques](https://javascript.info/logical-operators)