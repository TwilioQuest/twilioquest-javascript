<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.beamTwoOnline &&
worldState.beamThreeOnline &&
worldState.beamFourOnline;
%>

# 最後のビームを有効にする

<style>
table.lasers {
  margin-top: 10px;
}
table.lasers th, table.lasers td {
  text-align: center !important;
}
table.lasers td span {
  font-weight: bold;
}
table.lasers td span.on {
  color: green;
}
table.lasers td span.off {
  color: red;
}
</style>
<table class="lasers">
  <tr>
    <th>BEAM 1</th>
    <th>BEAM 2</th>
    <th>BEAM 3</th>
    <th>BEAM 4</th>
  </tr>
  <tr>
    <td>
      <% if (worldState.beamOneOnline) { %>
        <span class="on">オンライン</span>
      <% } else { %>
        <span class="off">オフライン</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamTwoOnline) { %>
      <span class="on">オンライン</span>
      <% } else { %>
        <span class="off">オフライン</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamThreeOnline) { %>
      <span class="on">オンライン</span>
      <% } else { %>
        <span class="off">オフライン</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamFourOnline) { %>
      <span class="on">オンライン</span>
      <% } else { %>
        <span class="off">オフライン</span>
      <% } %>
    </td>
  </tr>
</table>
<div class="aside">
<h3>To-Doリスト</h3>
<% 
if (isObjectiveReady) {
%>
<ul>
  <li><code>ducktypium.js</code>というファイルを作成する</li>
  <li>これまでに学んだスキルを活かし、オブジェクティブに記されたクラス<code>Ducktypium</code>を作成してください。</li>
  <li>完了したら、[<em>HACK</em>]をクリックし、実験を巻き戻してください!</li>
</ul>
<% } else { %>
<ul>
  <li>ラボで消えた3名の科学者を見つけ、アクティベーションコードを手に入れます</li>
  <li>アクティベーションコードを使い、ビーム2、3、4を有効にします</li>
  <li>ここに戻って最後のビームを有効にします</li>
</ul>
<% } %>
</div>
<%
if (isObjectiveReady) {
%>
他の3つのビームがオンラインに復帰したので、**失敗した実験プロセスを巻き戻し**、元の世界に戻れます!

メインビームの制御状況を調べて実験の問題を分析したところ、主任サイエンティストの計算に問題はなく、計画どおりに機能したことが分かりました。爆発の原因となったエラーは、**計画的な破壊活動**によるものと思われます!誰が破壊したのか明らかにしたいところですが、今は目の前の作業に集中しなければなりません。

壊れたJavaScriptファイルは削除され、バックアップも見つかりません。この重要なユーティリティの代替を作成する必要があります。問題のファイルはDucktypiumの特性が記され、結晶の安定化プロセスに関連するいくつかのタスクを実行する内容になっています。

## Ducktypiumクラス

コードフォルダに`ducktypium.js`ファイルを作成します。その中に、クラス`Ducktypium`を作成します。コンストラクターは1つの文字列引数(結晶の色)を取り、そのデータをインスタンス変数`color`に格納します。**色は`red`、`blue`、`yellow`のみ**使えます。引数がそれ以外の文字列の場合、コンストラクターは[エラーをスロー](https://javascript.info/try-catch#throwing-our-own-errors)します。

作成したクラスは**プロパティも定義**します。この`calibrationSequence`プロパティは、最初は**空の配列**に設定されます。

Ducktypiumクラスは2つのインスタンスメソッド`refract`と`calibrate`を実装します。それぞれの関数について次に説明します。

## `refract`メソッド

必須メソッドの1つで、着色光を受けたときのDucktypiumの屈折特性を記述します。

`refract`メソッドは1つの文字列引数を取り、この引数は`red`、`blue`、`yellow`のいずれかである必要があります。コンストラクターと同じく、このメソッドは引数がそれ以外の文字列の場合に[エラーをスロー](https://javascript.info/try-catch#throwing-our-own-errors)します。関数は**1つの文字列を返します**。これは、インスタンスの`color`プロパティと`refract`関数に渡された色の組み合わせによる色です。

- インスタンスの`color`プロパティが渡された引数と同じであれば、その値を返します。
- 異なる組み合わせの色であれば、2つの[主要色](https://en.wikipedia.org/wiki/Primary_color)を組み合わせた文字列を返します。

主要色は次の組み合わせがあります。

- <span style="color:red">red</span> + <span style="color:blue">blue</span> = <span style="color:purple">purple</span>
- <span style="color:red">red</span> + <span style="color:#ad9400">yellow</span> = <span style="color:orange">orange</span>
- <span style="color:#ad9400">yellow</span> + <span style="color:blue">blue</span> = <span style="color:green">green</span>

## `calibrate`メソッド

もう1つの必須メソッドで、Ducktypium結晶の安定化に必要なキャリブレーションシーケンスを作成します。

`calibrate`メソッドは1つの引数(数値配列)を取ります。この入力配列を使用して、次の処理を行います。

- 数値を最小から最大の順にソートする
- 配列のそれぞれの数値に`3`を掛ける
- 結果の配列を`Ducktypium`インスタンスの`calibrationSequence`変数に割り当てます。

## 使用例

コードが完成すると、Ducktypiumクラスは次の例のように機能します。

```js
// The following would produce an error
try {
  const badColor = new Ducktypium("pink");
} catch (e) {
  console.log("Color must be red, yellow, or blue!");
}

// Create a new instance of the class
const dt = new Ducktypium("red");

console.log(dt.color); // prints 'red'

console.log(dt.refract("blue")); // prints 'purple'
console.log(dt.refract("red")); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
```

参考に使用できるサンプルコードを[Help]タブで見つけることができます。JavaScriptに関するあらゆるスキルを駆使して完成させてください!これでThe Cloudの運命が決まります。

`ducktypium.js`スクリプトが完成したら、[_HACK_]ボタンをクリックして実験を巻き戻してください!

<% } else { %>

失敗したDucktypium実験を巻き戻すには、このビーム1を含め、**4つのすべてのステーシスビームをオンラインに復帰させる**必要があります。このビームを起動する前に、ビーム2、3、4がオンラインになっている必要があります。

主任サイエンティストは、残りの3つのレーザーを再起動する**アクティベーションコードは仲間の科学者の手にある**と言っていました。ラボにいる3人の科学者を見つけ、**コードを使用**してこの部屋にある残りのレーザーを再起動してください。

3つのビームがオンラインに復帰した後、**ここに戻って最後のビームを有効にしてください**。

<% } %>
