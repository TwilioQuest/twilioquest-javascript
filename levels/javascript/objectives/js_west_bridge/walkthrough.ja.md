# コードの分岐(else)

この演習の目標は、[else文](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)の使用方法を習得することです。先に、[if文](https://javascript.info/ifelse#the-if-statement)を使い、特定の条件を満たす場合に実行するコードブロックを指定しました。`else`文を使用すると、その他の場合に実行するコードを指定できます。

[MDNでのif/else文の動作については、こちらをご覧ください](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)。

以下に、`else`句のあるif文の簡単な例を示します。

```js
const luckyNumber = 7;

if (luckyNumber === 7) {
  console.log('Yup, 7 is a lucky number.');
} else {
  console.log('I think only 7 is a lucky number, right?');
}
```

この例では、`luckyNumber`に`7`以外の数値が設定されている場合、2番目の文字列が出力されます。

## Tree Life Detectorの修復

橋を延長するには、コードフォルダに、ファイル`treeLifeDetector.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

[コマンドライン引数](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)(ツリーがaliveか他のステータスかを示す1桁の数値)を使用して作業します。

こちらのコードを参考にできます。スクリプトに渡される最初の引数の値を取得するものです。

```js
// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

```

以下のように上記のコードを実行してテストできます。次の場合は、文字列`alive`が出力されます。

```bash
node treeLifeDetector.js 0
```

次の場合は、テキスト`other`が出力されます。

```bash
node treeLifeDetector.js 3
```

作成したスクリプトがオブジェクティブの記述どおりに機能した後、[*HACK*]ボタンをクリックし、作業内容を確認します。

## 役立つリソース

* [MDN条件分岐入門](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - else文](https://javascript.info/ifelse#the-else-clause)
* [MDN - JavaScriptデータ型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)