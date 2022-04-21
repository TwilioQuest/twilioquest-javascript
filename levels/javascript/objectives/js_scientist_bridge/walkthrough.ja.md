# コードの分岐(else)

この演習の目標は、[else-if文](https://javascript.info/ifelse#several-conditions-else-if)の使用方法を習得することです。これらのステートメントは、条件付きロジックがさまざまに分岐する場合に使用します。

[MDNでのelse-if文の動作については、こちらをご覧ください](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)。

以下に、else-ifを使用するif文の簡単な例を示します。

```js
const ninjaTurtle = 'Leonardo';

if (ninjaTurtle === 'Leonardo') {
  console.log('leads');
} else if (ninjaTurtle === 'Donatello') {
  console.log('does machines');
} else if (ninjaTurtle === 'Raphael') {
  console.log('cool, but cruel');
} else if (ninjaTurtle === 'Michelangelo') {
  console.log('party dude');
} else {
  console.log('not a ninja turtle');
}
```

この例では、`ninjaTurtle`変数の現在の値に応じてさまざまな文字列が出力されます。

## Tree Life Detectorの修復

橋を延長するには、コードフォルダに、ファイル`enhancedLifeDetector.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

[コマンドライン引数](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)(ツリーがaliveか他のステータスかを示す1桁の数値)を使用して作業します。

こちらのコードを参考にできます。スクリプトに渡される最初の引数の値を取得するものです。

```js
// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

```

以下のように上記のコードを実行してテストできます。次の場合は、文字列`flowering`が出力されます。

```bash
node enhancedLifeDetector.js 1
```

次の場合は、テキスト`other`が出力されます。

```bash
node enhancedLifeDetector.js 3
```

そのほかに考えられるステータス(数値別)については、[**Objective**]タブの表をご覧ください。

作成したスクリプトがオブジェクティブの記述どおりに機能した後、[*HACK*]ボタンをクリックし、作業内容を確認します。

## 役立つリソース

* [MDN条件分岐入門](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - else-if文](https://javascript.info/ifelse#several-conditions-else-if)