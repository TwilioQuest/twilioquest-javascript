# Vencer os argumentos

O objetivo aqui é familiarizá-lo com o conceito de [argumentos de linha de comando](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/). Estes são os dados que são passados para o código JavaScript quando ele é executado, para dar a ele algum contexto durante a execução.

Até agora, você executa os scripts de teste com um comando que se parece com isso.

```bash
node someProgram.js
```

Em seguida, seu código é executado, desempenhando as instruções que você escreveu.

No entanto, é frequentemente útil passar alguns dados iniciais para um programa que você tenha escrito. Chamamos isso de **argumentos** de dados iniciais. Para executar um script com argumentos, você pode digitar um texto adicional após o nome do arquivo de código, separado por espaços. Veja agora um exemplo de execução de um script com três argumentos:

```bash
node someProgram.js "argument one" "another argument" allOneWordNoQuotes
```

Você pode acessar esses argumentos em seu código usando uma lista especial chamada [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv).

Neste objetivo, você foi solicitado a escrever um programa que funciona com um argumento de linha de comando. Isso é um pouco complicado no início, então aqui está o código que você precisa como ponto de partida:

```js
// The line of code below reads in the value of the argument passed in after
// the name of your script
const argumentValue = process.argv[2];

// This line of code converts the argument to a numeric value
const numberValue = Number(argumentValue);

// This line of code divides the input number by two, and stores the result in
// a variable named "result"
const result = numberValue / 2;

// You need to finish the line of code below! How would you print out the
// result to the terminal window without hard coding the number 42?
console.log(42);
```

Adicione o código acima a um arquivo chamado `divideByTwo.js` no diretório de código. Para referência, a pasta de código pode ser encontrada aqui:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Depois de fazer isso, você precisa alterar a última linha do programa para efetivamente imprimir o resultado da divisão do número de entrada por dois. Para testar o código, execute-o a partir de um terminal como este.

```bash
node divideByTwo.js 400
```

Se o código estiver correto, ele imprimirá o número `200` após a execução. Lembre-se, você precisa editar o código inicial acima para que funcione!

Depois que o script estiver funcionando corretamente, clique no botão *HACK*.

## Recursos úteis

* [Argumentos da linha de comando Node.js](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
* [Documentos de referência para process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)