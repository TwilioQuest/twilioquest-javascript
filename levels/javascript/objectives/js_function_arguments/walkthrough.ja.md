# JavaScript関数の作成方法

この演習の目標は、**引数**(別名「パラメーター」)を受け取る[関数の作成](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)方法を習得することです。**引数**は、入力データの一部であり、作成する関数がそれを使用してさまざまな出力を生成します。

コードフォルダに、ファイル`politeLasers.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

このファイルに、関数`getLaserSetting`を作成します。こちらのコードを参考にできます。関数が定義済みですが、オブジェクティブの記述どおりには機能しない状態です。

```js
function getLaserSetting(magicWord) {
  if (magicWord === 'the magic word here') {
    return 'what should this be?';
  } else {
    return 'ON';
  }
}

const currentSetting = getLaserSetting('right now!');
console.log('The current laser setting is: ' + currentSetting);
```

オブジェクティブには、作成する関数の最初の引数(上の例の`magicWord`)が文字列`please`である場合は、関数から文字列`OFF`を返すということが記述されています。その他の入力の場合は、`ON`を返します。

オブジェクティブの指示どおりに関数が機能した後、[*HACK*]ボタンをクリックして確認してください。

## 便利なリンク

* [JavaScript.info - 関数ガイド](https://javascript.info/function-basics)
* [関数の宣言](https://javascript.info/function-basics#function-declaration)
* [関数からの戻り値](https://javascript.info/function-basics#returning-a-value)
* [MDN関数ガイド](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)