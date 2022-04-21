<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.eastWing &&
worldState.eastWing.hadSavedConversation;
%>

# ビーム3の有効化

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
  <li><code>laserPower.js</code>というファイルを作成する</li>
  <li>関数<code>calculatePower</code>を作成します。これは、唯一の引数として数値の配列を1つ受け取る関数です。</li>
  <li>作成する関数が<b>数値を返す</b>。この数値は、オブジェクティブの記述どおりに入力配列の変換や結合を行った結果です。</li>
  <li>完了した後[<em>HACK</em>]をクリックしてください。</li>
</ul>
<% } else { %>
<ul>
  <li>ラボの東ウィングで電気技師を見つけて話しかける</li>
  <li>ここに戻り、ビーム3を有効にする</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
電気技師のパスコードを入力すると、ディスプレイが起動し、ビーム3に接続されているシステムのトラブルシューティングを開始できます。

このビームは、レーザービームを介して送信するパワーの計算エラーにより、オフラインに追いやられたようです。このロジックは、修正が必要なJavaScript関数により管理されています。

配列について学習したことをすべて活用し、この課題を克服します。

## ビームを再起動

コードフォルダに、ファイル`laserPower.js`を作成します。このファイル内に、[JavaScript関数を作成し](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)、名前を`calculatePower`とします。

この関数は、1つの引数(数値の配列)を受け取ります。この配列には、レーザーの総パワー設定が格納されますが、入力数値は少しずつずれます。

`calculatePower`関数では、**入力数値に2を掛け**、最初に入力配列内のすべての値を調整します。その後、**それらの数値をすべて加算し**、作成した関数から**結果を返します**。

コードを準備した後、[_HACK_]ボタンをクリックし、このレーザーをオンラインに復旧させます。

<% } else { %>

ステーシスビームの制御状況を調べましたが、現在ロックダウンされています。このレーザーを有効にするには、**電気技師のアクセスコード**が必要です。

電気技師は、ラボの**東ウィング**に停泊中の補給貨物船に乗っているはずです。爆発が起きたときに補給品の新規出荷手続きを行っていました。

**電気技師に話しかけて**、このビームのアクセスコードを受け取ります。

<% } %>
