\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.eastWing \&\& worldState.eastWing.hadSavedConversation; %>

# オブジェクティブのヘルプ

\<% if (isObjectiveReady) { %>

このオブジェクティブを完了するため、学習した手法を複数組み合わせて電気技師を**無限ループ**から救います。

コードフォルダに、ファイル`laserPower.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

このファイルに、関数`calculatePower`を作成します。こちらのコードを参考にできます。関数が定義済みですが、オブジェクティブの記述どおりには機能しない状態です。

```js
function calculatePower(powerSettings) {
  let totalPower = 0;

  return totalPower;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower); // should be 24
```

ここまで来るには、この課題を克服するためのあらゆるスキルが必要でした。きっとできます!

作成した`calculatePower`関数がオブジェクティブの記述どおりに機能した後、[_HACK_]ボタンをクリックします。

## 便利なリンク

- [JavaScript.info - 配列reduce関数](https://javascript.info/array-methods#reduce-reduceright)
- [JavaScript.info - 配列のmap関数](https://javascript.info/array-methods#map)
- [JavaScript.info - if文](https://javascript.info/ifelse)
- [JavaScript.info - 関数からの戻り値](https://javascript.info/function-basics#returning-a-value)
- [MDN - 関数ガイド](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

\<% } else { %>

ステーシスビームの制御状況を調べましたが、現在ロックダウンされています。このレーザーを有効にするには、**電気技師のアクセスコード**が必要です。

電気技師は、ラボの**東ウィング**に停泊中の補給貨物船に乗っているはずです。爆発が起きたときに補給品の新規出荷手続きを行っていました。

**電気技師に話しかけて**、このビームのアクセスコードを受け取ります。

\<% } %>