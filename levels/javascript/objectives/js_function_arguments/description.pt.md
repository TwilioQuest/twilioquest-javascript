# Vencer com argumentos

<div class="aside">
<h3>Lista de tarefas</h3>
<ul>
  <li>Crie um arquivo chamado <code>politeLasers.js</code></li>
  <li>Crie uma função chamada <code>getLaserSetting</code> que usa um único argumento de string.</li>
  <li>Se o argumento for "please", retorne a string "OFF". Caso contrário, retorne a string "ON".</li>
  <li>Clique em <em>HACK</em> quando terminar</li>
</ul>
</div>
Essa barreira de segurança também não está funcionando corretamente e, em pouco tempo, você verá por que. Seu velho amigo, Glen, da TI, configurou essa barreira de segurança para desligar apenas se solicitado com educação.

Para liberar essa barreira, você precisará escrever uma função que use [argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) (também chamados de "parâmetros") e executar uma [lógica booleana](https://javascript.info/ifelse) básica.

Leia a seção "Help" (Ajuda) para obter mais informações sobre argumentos de função. Se precisar de ajuda para usar a lógica booleana, você pode primeiro vencer os desafios da **south wing** (ala sul) do laboratório.

## Reduzir a barreira

Semelhante à barreira anterior, esta é mantida por uma **função de JavaScript** que determina se os lasers da barreira são `"ON"` ou `"OFF"`. Você precisará **substituir essa função** para desativar a barreira do laser.

Crie um arquivo chamado `politeLasers.js` na pasta de códigos. Dentro deste arquivo, [crie uma função de JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) chamada `getLaserSetting`, assim como você fez no último desafio.

Desta vez, sua função deve retornar um valor diferente com base no **primeiro argumento** para a função `getLaserSetting`. Se o primeiro argumento for a string `please`, retorne `OFF`. Se o primeiro argumento for qualquer outra coisa, retorne `ON`.

Assim que o código estiver pronto, clique no botão *HACK* para substituir a função de comando do laser.