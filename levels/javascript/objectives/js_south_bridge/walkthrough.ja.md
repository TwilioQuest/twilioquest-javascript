# より複雑なブールロジック

一部のブール値の比較は、他のものより複雑です。複数の条件を評価し、コードにおける分岐の有無や分岐の条件を判断する必要があるかもしれません。この作業を行うには、AND(`&&`)とOR(`||`)のブール演算子を使用します。これらは、**論理演算子**と呼ばれることもあります。

[JavaScript.infoでのこれらの演算子については、こちらをご覧ください](https://javascript.info/logical-operators)。

以下に、より複雑な比較を伴うif文の簡単な例を示します。

```js
const name = 'Cedric';
const isRobot = true;
const awesomenessLevel = 1000;

if (
  name === 'Cedric' &&
  isRobot &&
  awesomenessLevel > 10
) {
  console.log('Yup, that is our Cedric!');
}
```

## 散水

スプリンクラーシステムを修復するには、コードフォルダに、ファイル`shouldWater.js`を作成します。コードフォルダの場所:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

今回は、作成するスクリプトで2つの引数を考慮し、以下のコードを開始点として使用します。

```js
const lifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

// Your if statement goes below...
if (false) {
  console.log('WATER');
}
```

上記のコードを以下のように実行するとテストできます。

```bash
node shouldWater.js 1 20
```

上記のコードでは何も出力されません。乾燥レベルは10を超えていますが、ライフステータスが0ではなく、1になっているためです。

このコードでは`WATER`が出力されます。最初の引数が`0`、かつ2番目の引数が`10`より大きいためです。

```bash
node shouldWater.js 0 11
```

作成したスクリプトがオブジェクティブの記述どおりに機能した後、[*HACK*]ボタンをクリックし、作業内容を確認します。

## 役立つリソース

* [MDN条件分岐入門](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - 論理演算子](https://javascript.info/logical-operators)