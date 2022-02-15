\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.beamTwoOnline \&\& worldState.beamThreeOnline \&\& worldState.beamFourOnline; %>

# オブジェクティブのヘルプ

\<% if (isObjectiveReady) { %>

これまでに学んだJavaScriptの知識を活かしてタスクを進めてください!クラス、配列メソッド、ブールロジックなど、あらゆる知識が必要になります。

コードフォルダに、ファイル`ducktypium.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

このファイル内に、クラス`Ducktypium`を作成します。こちらのコードを参考にできます。クラスが定義済みですが、オブジェクティブの指示どおりには機能しない状態です。

```js
class Ducktypium {
  constructor(color) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
```

他のウィングに再びアクセスし、そこで学んだスキルを確かめることができます。

オブジェクティブに記された`Ducktypium`クラスを実装後、[_HACK_]をクリックして実験を巻き戻してください!できました!

## 役立つリンク

- [JavaScript.info - 全リファレンス](https://javascript.info/)
- [MDN JavaScriptリファレンス](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

\<% } else { %>このオブジェクティブを完了するために必要な条件:

1. 消えた3人の科学者を見つける
2. 彼らのアクティベーションコードを使い、部屋にある3つのビームをすべて有効にする

ラボを探索して科学者を見つけてください。(現在位置の)メイン実験室のサウス、イースト、ウェストの各エリアにそれぞれ1名いるはずです。

3つのビームがオンラインに復帰した後、**ここに戻って最後のビームを有効にしてください**。\<% } %>