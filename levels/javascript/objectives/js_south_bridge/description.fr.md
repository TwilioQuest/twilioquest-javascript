# Arroser les plantes

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Créer un fichier appelé <code>shouldWater.js</code></li>
  <li>Obtenir deux nombres en tant qu'arguments de ligne de commande: le premier est l'ID d'état de vie d'un arbre et le second est son niveau de sécheresse.</li>
  <li>Si le premier argument est <code>0</code> ET que le deuxième argument est supérieur à <code>10</code>, imprimez le texte <code>WATER</code></li>
</ul>
</div>
Dissimulé dans le coin sud-est du labo de botanique, un autre système a été endommagé lors de l'incident du ducktypium. Il semble que le système d'arrosage automatique soit hors ligne, ce qui a également **désactivé le pont sud**.

Pour maintenir les plantes hydratées et étendre le pont sud, vous devez réparer le système d'arrosage automatique.

## Faire pleuvoir

Une inspection du système d'arrosage révèle un autre problème avec sa logique booléenne. Pour résoudre ce problème, créez un fichier nommé `shouldWater.js` dans votre dossier de code. Ce script prend **deux arguments de ligne de commande**&nbsp;: les deux sont des nombres.

* Le premier argument est l'état de vie d'une plante&nbsp;: `0` signifie que la plante est vivante
* Le deuxième est le niveau de sécheresse de la plante&nbsp;: toute valeur supérieure à `10` signifie que la plante a besoin d'eau

Voici un exemple d'appel de votre script avec une plante vivante (statut `0` ) et le niveau de sécheresse `20`&nbsp;:

```bash
node shouldWater.js 0 20
```

Pour que le système d'arrosage fonctionne correctement, ce script doit imprimer la chaîne `WATER` uniquement si le premier argument du script est `0` et que le second argument est un nombre supérieur à `10`. Autrement, il ne doit imprimer rien d'autre.

Une fois que votre code se comporte comme décrit ci-dessus, cliquez sur le bouton *HACK* pour réparer le système d'arrosage&nbsp;!