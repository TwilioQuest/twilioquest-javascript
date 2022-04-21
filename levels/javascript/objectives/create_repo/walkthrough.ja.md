# gitリポジトリの作成

公式のgit Webサイトに、[コンピューター上の既存ディレクトリにリポジトリを作成する方法](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_initializing_a_repository_in_an_existing_directory)に関するチュートリアルがあります。

サンプルのプロジェクト名は使用せずに、自分のJavaScriptワークスペースディレクトリにgitリポジトリを作成してください。`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`.

## あなたのコマンド:

1. `cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"`
2. `git init`
3. `git add -A`
4. `git commit -m "Initial commit"`