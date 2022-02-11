<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.northWing &&
worldState.northWing.hadSavedConversation;
%>

# ビーム4の有効化

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
  <li><code>targetingSolution.js</code>というファイルを作成する</li>
  <li>このオブジェクティブの仕様に従い、クラス<code>TargetingSolution</code>を作成する</li>
</ul>
<% } else { %>
<ul>
  <li>ラボの北ウィングに捕らわれている理論物理学者を見つけて話しかける</li>
  <li>ここに戻り、ビーム4を有効にする</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
物理学者のパスコードを入力すると、ディスプレイが起動し、ビーム4に接続されているシステムのトラブルシューティングを開始できます。

このビームのターゲットシステムは、事故で損傷したようです。このビームを再起動するには、[JavaScriptクラス](https://javascript.info/class)と[オブジェクトリテラル](https://javascript.info/object#literals-and-properties)を使用してレーザーに新しいターゲット機構を導入します。

## ビームを再起動

コードフォルダに、ファイル`targetingSolution.js`を作成します。このファイル内に、`TargetingSolution`という[JavaScriptクラスを作成します](https://javascript.info/class)。このクラスは、レーザーのターゲット情報を格納し、ターゲット座標が含まれている書式設定された文字列を出力します。

このクラスのコンストラクターは、1つの引数を受け取ります。引数は、ラボの3Dスペースにおけるターゲットの正確なx、y、z座標が含まれているオブジェクトリテラルです。

作成する`TargetingSolution`コンストラクターでは、次の3つのプロパティを設定オブジェクトのインスタンス変数として格納します。

| プロパティ| タイプ|
|----------|----------|
| X| number|
| y| number|
| z| number|

また、作成するクラスには、インスタンス関数`target`を実装します。この関数は、丸括弧、スペース、カンマから成る形式`(x, y, z)`でインスタンスのターゲット座標が含まれている、書式設定された文字列を返します。

以下に、作成するクラスの使用方法を示します。

```js
const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1,
});

console.log(sln.target()); // Should output a string of (45, 12, -1)
```

**ターゲット関数の書式とスペースは、示されているとおり正確に設定してください。**

開始点として使用できるコードは、[Help]タブで見つかります。コードを準備した後、[_HACK_]ボタンをクリックし、このレーザーをオンラインに復旧させます。

<% } else { %>

ステーシスビームの制御状況を調べましたが、現在ロックダウンされています。このレーザーを有効にするには、**理論物理学者のアクセスコード**が必要です。

理論物理学者は、**北ウィング**にると思われます。そこは、時空を曲げて物質を操るDucktypiumの能力を研究していた場所です。

**理論物理学者に話しかけて**、このビームのアクセスコードを受け取ります。

<% } %>
