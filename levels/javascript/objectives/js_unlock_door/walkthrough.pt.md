# Saiba como executar o código JavaScript

O objetivo deste exercício é familiarizá-lo com a criação e a execução de programas JavaScript no computador. Para este exercício, forneceremos a você todo o código necessário para concluir o desafio. No entanto, em exercícios futuros, você precisará escrever mais do código por conta própria!

<details>
<summary>Etapa 1: Crie um arquivo de código JavaScript</summary>
Primeiro, você precisa criar um arquivo no computador chamado `sayPlease.js` dentro da pasta que você criou como área de trabalho do TwilioQuest. Como lembrete, essa pasta está localizada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

A **extensão do arquivo** (a parte `.js`) indica que tipo de arquivo você está criando. Os arquivos de som podem ter uma extensão `.mp3`. Um documento do Microsoft Word pode ter uma extensão `.docx`. Os arquivos JavaScript (geralmente) têm uma extensão `.js`.

Provavelmente será conveniente criar esses arquivos usando a interface de terminal, pois você precisará usá-los mais tarde para executar o código JavaScript.

Para criar o arquivo no Mac ou Linux, use os seguintes comandos no aplicativo de terminal:

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
touch sayPlease.js
```

No PowerShell no Windows, use os seguintes comandos:

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
New-Item sayPlease.js
```

</details>
<details>
<summary>Etapa 2: Abra o arquivo e escreva o código para a solução</summary>
Após criar o arquivo JavaScript, agora você precisa inserir algum código nele! Da mesma forma que você pode usar o Photoshop para abrir e editar um arquivo de imagem, você vai querer que um programa instalado no seu computador edite arquivos de código. Em programação, essas ferramentas são chamadas de **IDEs (Integrated Development Environments, ambientes de desenvolvimento integrado)** ou **editores de texto**.

Se você não tiver um desses programas instalado, recomendamos que experimente o [Visual Studio Code](https://code.visualstudio.com/). O VS Code é um editor de texto de programação que é relativamente leve, mas vem com muitos recursos prontos úteis e é capaz de fazer coisas muito complexas e poderosas quando você pegar o jeito.

Ao usar o código VS ou o editor de texto de sua escolha, abra o arquivo `sayPlease.js`. Inicialmente, o arquivo provavelmente estará vazio.

Para esse desafio, forneceremos todos os códigos necessários. Pegue o código abaixo e copie-o no arquivo. Não se preocupe se você não entender o que ele faz ainda, mas como você verá em breve, ele usa uma função JavaScript incorporada chamada `console.log` para imprimir uma linha de texto na janela do terminal:

```js
console.log('Glen, will you please open the barrier?');
```

Após adicionar este código ao arquivo, **salve as alterações feitas!** Agora, você está pronto para executar o código e ver o que ele faz.

</details>
<details>
<summary>Etapa 3: Execute o código e verifique se funciona</summary>
Agora, usaremos o tempo de execução Node.js que você instalou para executar o código dentro do `sayPlease.js`. Normalmente, você fará isso usando o aplicativo de prompt de comando no computador, aplicativo de terminal em um Mac ou PowerShell no Windows.

Abra o aplicativo do terminal e digite o comando a seguir para garantir que o "diretório de trabalho atual" seja a pasta em que você criou `sayPlease.js`.

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
```

Em seguida, use o comando `node` para executar o código JavaScript:

```bash
node sayPlease.js
```

Após executar o comando acima, você deverá ver sua refinada solicitação para Glen impressa no console.

</details>
Ao longo do TwilioQuest, você será solicitado a criar, editar e executar arquivos de código conforme descrito acima.

Quando seu arquivo `sayPlease.js` puder ser executado e imprimir a mensagem necessária, clique no botão *HACK* para enviar a solicitação para o departamento de TI.