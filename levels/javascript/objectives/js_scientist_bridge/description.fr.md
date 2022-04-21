# Conditions complexes

<div class="aside">
<h3>Liste de tâches</h3>
<ul>
  <li>Créer un fichier appelé <code>enhancedLifeDetector.js</code></li>
  <li>Imprimer l'état de vie de l'arbre approprié en fonction de l'argument de ligne de commande envoyé à votre script (consultez le tableau ci-dessous)</li>
</ul>
</div>
Le dernier pont qui vous sépare du botaniste est également désactivé. Comme pour le pont ouest, celui-ci a échoué, car le **Tree Life Detector** est sous-configuré.

Cette fois-ci, vous devrez créer une version enchantée du script du Tree Life Detector pour étendre le pont.

## Tree Life Detector amélioré

Créez un fichier appelé `enhancedLifeDetector.js` dans votre dossier de code. Ce programme utilise un **argument de ligne de commande** unique, un chiffre unique `Number`, indiquant l'état de vie actuel d'un arbre. Il imprime ensuite une chaîne de texte lisible par l'utilisateur indiquant l'état actuel d'un arbre.

Un mappage des ID d'état de vie des arbres aux chaînes lisibles par l'utilisateur s'affiche à proximité avec d'autres états que `alive` et `other`&nbsp;:

| ID d'état de vie de l'arbre| État de l'arbre|
|----------|----------|
| 0| "alive"|
| 1| "flowering"|
| 2| "shedding"|
| Plus de&nbsp;3| "other"|

Lorsque votre script est exécuté, il doit imprimer la chaîne de texte lisible par l'utilisateur en fonction du numéro d'ID transmis.

Si le script est exécuté comme suit&nbsp;:

```bash
node treeLifeDetector.js 2
```

Il doit imprimer la chaîne `shedding`. Si le nombre transmis n'est pas&nbsp;0, 1 ou&nbsp;2, votre script doit imprimer `other`.

Pour relever ce défi, vous devrez utiliser une logique booléenne plus complexe que vous ne l'avez fait auparavant. Consultez la section **Aide** pour en savoir plus.

Une fois que votre script `enhancedLifeDetector.js` se comporte de cette manière, cliquez sur le bouton *HACK* pour valider votre travail&nbsp;!