# Que la vie soit

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Créer un fichier appelé <code>treeLifeDetector.js</code></li>
  <li>Si le numéro <code>0</code> est transmis comme argument de ligne de commande, affichez <code>alive</code></li>
  <li>Si un autre nombre est transmis comme argument de ligne de commande, affichez <code>other</code></li>
</ul>
</div>
Lorsque vous recherchez à étendre le pont ouest dans le labo, ce panneau de commande s'affiche. Apparemment, le pont ouest est désactivé, car le **Tree Life Detector** (détecteur de vie des arbres) du labo a été endommagé.

**Vous devrez réparer le Tree Life Detector** (détecteur de vie des arbres) avant de pouvoir continuer vers le botaniste.

## Réparer le Tree Life Detector (détecteur de vie des arbres) 

Créez un fichier appelé `treeLifeDetector.js` dans votre dossier de code. Ce programme utilise un **argument de ligne de commande** unique, un chiffre unique `Number`, indiquant l'état de vie actuel d'un arbre. Un mappage actuel des ID d'état de vie des arbres aux chaînes lisibles par l'utilisateur s'affiche à côté du panneau de commande&nbsp;:

| Tree Life Status ID (ID d'état de vie de l'arbre)| État de l'arbre|
|----------|----------|
| 0| "alive"|
| 1| "other"|
| 2| "other"|
| Plus de&nbsp;3| "other"|

Lorsque votre script est exécuté, il doit rendre la chaîne de texte lisible par l'utilisateur en fonction du numéro d'ID transmis.

Si le script est exécuté comme suit&nbsp;:

```bash
node treeLifeDetector.js 0
```

Il doit rendre la chaîne `alive`.

Si le script est exécuté avec un autre numéro comme suit&nbsp;:

```bash
node treeLifeDetector.js 2
```

Il doit rendre la chaîne `other`.

Une fois que votre script `treeLifeDetector.js` se comporte de cette manière, cliquez sur le bouton *HACK* pour valider votre réparation&nbsp;!