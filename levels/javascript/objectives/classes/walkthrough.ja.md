# ハイクラス

この演習では、JavaScriptの[クラス](https://javascript.info/class)について詳しく学びます。「クラス」は、コード内で作成できる新しい種類のオブジェクトです。

JavaScript Labの多くのタスクは、組込オブジェクトと「プリミティブ」データタイプ(数値、文字列、ブール値など)を使用しています。クラスは、例えばユーザーやブログ記事、「いいね」やサブスクリプションなど、コードに固有の複雑なデータ概念を表します。[オブジェクトリテラル](https://javascript.info/object#literals-and-properties)と異なり、クラスにはデータを操作する動作を含めることもできます。

この演習では、オブジェクティブの仕様に基づいて[クラスを作成](https://javascript.info/class)する必要があります。

コードフォルダに、ファイル`classes.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

このファイル内に、クラス`Materializer`を作成します。こちらのコードを参考にできます。クラスが定義済みですが、オブジェクティブの指示どおりには機能しない状態です。

```js
class Materializer {
  constructor(targetName) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
```

オブジェクティブの指示どおりに関数が機能した後、[*HACK*]ボタンをクリックして確認してください。

## 便利なリンク

* [JavaScript.info - クラス](https://javascript.info/class)
* [MDN - クラス](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)