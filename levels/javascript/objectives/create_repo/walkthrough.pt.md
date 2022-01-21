# Crie um repositório Git

O site oficial do git tem um tutorial sobre [como criar um repositório em um diretório existente no computador](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_initializing_a_repository_in_an_existing_directory).

Em vez do nome do projeto de amostra, você vai criar seu repositório git dentro do diretório da área de trabalho JavaScript em: `<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`.

## Seus comandos:

1. `cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"`
2. `git init`
3. `git add -A`
4. `git commit -m "Initial commit"`