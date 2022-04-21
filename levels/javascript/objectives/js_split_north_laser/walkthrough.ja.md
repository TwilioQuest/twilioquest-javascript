\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.northWing \&\& worldState.northWing.hadSavedConversation; %>

# オブジェクティブのヘルプ

\<% if (isObjectiveReady) { %>

このオブジェクティブでは、オブジェクトについて習得した知識とラボの北ウィングのクラスを組み合わせて、解決方法を作成します。

この演習では、オブジェクティブの仕様に基づいて[クラスを作成](https://javascript.info/class)する必要があります。

コードフォルダに、ファイル`targetingSolution.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

このファイル内に、クラス`TargetingSolution`を作成します。こちらのコードを参考にできます。クラスが定義済みですが、オブジェクティブの指示どおりには機能しない状態です。

```js
class TargetingSolution {
  constructor(config) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900,
});

console.log(m.target()); // would print "(10, 15, 900)"
```

オブジェクティブの指示どおりに関数が機能した後、[_HACK_]ボタンをクリックして確認してください。きっとできます!

## 便利なリンク

- [JavaScript.info - クラス](https://javascript.info/class)
- [MDN - クラス](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info - オブジェクトリテラル表記](https://javascript.info/object#literals-and-properties)
- [MDN - オブジェクトの初期化](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

\<% } else { %>

ステーシスビームの制御状況を調べましたが、現在ロックダウンされています。このレーザーを有効にするには、**理論物理学者のアクセスコード**が必要です。

理論物理学者は、**北ウィング**にると思われます。そこは、時空を曲げて物質を操るDucktypiumの能力を研究していた場所です。

**理論物理学者に話しかけて**、このビームのアクセスコードを受け取ります。

\<% } %>