# Créer un répertoire Git

Le site Web officiel de Git contient un tutoriel qui explique comment [créer un répertoire dans un répertoire existant de votre ordinateur](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_initializing_a_repository_in_an_existing_directory).

Au lieu d'utiliser leur exemple de nom de projet, vous allez devoir créer votre propre répertoire Git dans votre répertoire d'espace de travail JavaScript à l'adresse suivante&nbsp;: `<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`.

## Vos commandes&nbsp;:

1. `cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"`
2. `git init`
3. `git add -A`
4. `git commit -m "Initial commit"`