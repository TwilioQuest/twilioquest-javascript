# Um zumbido leve

<div class="aside">
<h3>Lista de tarefas</h3>
<ul>
  <li>Crie um arquivo chamado <code>fizzBuzz.js</code></li>
  <li>Obtenha um número como um argumento de linha de comando</li>
  <li>Imprima <code>Java</code>, <code>Script</code>, <code>JavaScript</code> ou o número próprio, conforme descrito na tabela abaixo.</li>
</ul>
</div>
Em uma seção quase vazia do laboratório de botânica, você encontra um baú velho empoeirado. É evidente que não é aberto há algum tempo e você fica curioso sobre o que pode estar dentro.

Uma inspeção rápida do mecanismo de travamento sugere que sua heurística interna pode estar corrompida. Substituí-los por um programa funcional pode ajudar a abrir a trava.

## Conserto do mecanismo de bloqueio do baú

Crie um arquivo chamado `fizzBuzz.js` na pasta de códigos. Seu programa deve ter um único argumento de linha de comando, que é um número inteiro. Um exemplo de invocação pode ser assim:

```bash
node fizzBuzz.js 15
```

Seu programa deve imprimir uma das quatro coisas, dependendo do número passado. Veja o que seu programa deve imprimir e em que circunstâncias:

| Número de entrada| Valor impresso|
|----------|----------|
| Divisível por 3| "Java"|
| Divisível por 5| "Script"|
| Divisível por 3 E 5| "JavaScript"|
| NÃO divisível por 3 OU 5| Número de entrada|

Por exemplo:

* Se o argumento for `3`, o programa deverá imprimir `Java`
* Se o argumento for `5`, o programa deverá imprimir `Script`
* Se o argumento for `15`, o programa deverá imprimir `JavaScript`
* Se o argumento for `7`, o programa deverá imprimir `7`

Assim que o programa funcionar como descrito acima, clique no botão *HACK*!