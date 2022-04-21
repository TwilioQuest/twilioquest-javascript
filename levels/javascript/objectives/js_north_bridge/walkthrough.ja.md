# if文の学習

このオブジェクティブの目標は、[if文](https://javascript.info/ifelse#the-if-statement)を使用した条件付きコードの実行方法を習得することです。プログラミングでは、特定の条件を満たす場合(ユーザーがログインした場合や、特定のファイルが存在する場合など)にのみコードを実行したいことがよくあります。

[MDNでのif文の動作については、こちらをご覧ください](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)。

以下に示すif文の簡単な例では、[比較演算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)(`===`演算子)を使用して2つのテキスト文字列が同じかどうかを確認し、同じである場合はテキストを出力します。

```js
const animal = 'Dog';

if (animal === 'Dog') {
  console.log('woof!');
}
```

比較ステートメントは、[ブール値](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)`true`または`false`と評価されます。このステートメントがtrueである場合は、if文内のコード(中括弧`{``}`の内側部分)が実行されます。

## 橋渡し

橋を延長するには、コードフォルダに、ファイル`northBridgeControl.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

主任サイエンティストのオフィスからパスワードを取得したときと同様に、[コマンドライン引数](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)を使用して作業します。作成するコードでは、特定の引数が渡された場合に限り、特定のメッセージを出力します。

こちらのコードを参考にできます。スクリプトに渡される最初の引数の値を取得するものです。ただし、if文は、現在の記述のままでは**機能しません**。したがって、オブジェクティブを満たすように変更します。

```js
const argumentValue = process.argv[2];

// Modify the if statement below to execute if and only if "argumentValue" is
// equal to the string "EXTEND"
if (false) {
  console.log('Extending bridge!');
}
```

以下のように上記のコードを実行してテストできます。次の場合は、メッセージが出力されます。

```bash
node northBridgeControl.js EXTEND
```

次の場合は、何も出力されません。

```bash
node northBridgeControl.js GO
```

作成したスクリプトがオブジェクティブの記述どおりに機能した後、[*HACK*]ボタンをクリックし、作業内容を確認します。

## 役立つリソース

* [MDN条件分岐入門](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - if文](https://javascript.info/ifelse#the-if-statement)
* [MDN - JavaScriptデータ型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)