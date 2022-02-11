# しゃれたオブジェクト

この演習では、JavaScriptの[オブジェクトリテラル表記](https://javascript.info/object#literals-and-properties)について詳しく学びます。

JavaScript Labの多くのタスクは、組込オブジェクトと「プリミティブ」データタイプ(数値、文字列、ブール値など)を使用しています。状況により、例えばユーザーやブログ記事、「いいね」やサブスクリプションなど、コードに固有の複雑なデータ概念を表すコードが必要になることがあります。

ここでは、より複雑なデータを作成する[オブジェクトリテラル](https://javascript.info/object#literals-and-properties)を学びます。この方法で作成したオブジェクトは自らのプロパティを持つことができます。また、1つの変数に割り当てできます。

コードフォルダに、ファイル`construction.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

このファイルに、関数`construct`を作成します。こちらのコードを参考にできます。関数が定義済みですが、オブジェクティブの記述どおりには機能しない状態です。

```js
function construct(name) {
  let person = {};

  return person;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name); // should be "Kevin"
console.log('duration is: ' + somePerson.duration); // should be 1000
```

オブジェクティブの指示どおりに関数が機能した後、[*HACK*]ボタンをクリックして確認してください。

## 便利なリンク

* [JavaScript.info - オブジェクトリテラル表記](https://javascript.info/object#literals-and-properties)
* [MDN - オブジェクトの初期化](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
* [JavaScript.info - 関数からの戻り値](https://javascript.info/function-basics#returning-a-value)
* [MDN - 関数ガイド](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)