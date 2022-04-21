# JavaScript関数の作成方法

この演習の目標は、JavaScriptで[関数を作成する](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)方法を習得することです。**関数**とは、特定のタスクを実行するために何度でも**呼び出し**できる再利用可能なコードチャンクのことです。

お気づきかもしれませんが、これまでの数多くのサンプルでは、組み込みのJavaScript関数`console.log`が使用されています。この関数は、ターミナルウィンドウにテキスト文字列を出力します。このバリアを解除するため、独自の関数を作成します。

コードフォルダに、ファイル`laserFunction.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

このファイルに、関数`getLaserSetting`を作成します。こちらのコードを参考にできます。関数が定義済みですが、現在間違った値を返しています。

```js
function getLaserSetting() {
  const setting = 42; // <- You'll need to change this line of code!
  return setting;
}

const currentSetting = getLaserSetting();
console.log('The current laser setting is: ' + currentSetting);
```

このオブジェクティブを満たすため、上記の宣言されている関数の内容を変更します。左右の中括弧(`{`と`}`の文字)は、関数内のコードの開始と終了を示します。`{`と`}`の文字の間に記述されたコードのみが、関数部分として実行されます。

作成する関数からは、オブジェクティブの記述どおりにレーザー設定の正しい値が**返されなければなりません**。変数について習得した知識を活かし、必要な変更を加えます。[Objective]タブの記述どおりに関数が機能した後、[*HACK*]ボタンをクリックし、作業内容を確認してください。

## 便利なリンク

* [JavaScript.info - 関数ガイド](https://javascript.info/function-basics)
* [関数の宣言](https://javascript.info/function-basics#function-declaration)
* [関数からの戻り値](https://javascript.info/function-basics#returning-a-value)
* [MDN関数ガイド](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)