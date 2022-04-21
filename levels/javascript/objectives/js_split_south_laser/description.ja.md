<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.southWing &&
worldState.southWing.hadSavedConversation;
%>

# ビーム2の有効化

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
  <li><code>sortOrder.js</code>というファイルを作成する</li>
  <li>比較が必要な2つのコマンドライン引数を受け取る</li>
  <li>作成するスクリプトは、名前順に、以下の説明のように、<code>-1</code>、<code>0</code>、または<code>1</code>を出力する</li>
</ul>
<% } else { %>
<ul>
  <li>ラボの南ウィングで植物学者を見つけて話しかける</li>
  <li>ここに戻り、ビーム2を有効にする</li>
</ul>
<% } %>
</div>
<% if (isObjectiveReady) { %>
植物学者のアクティベーションコードを使用し、このステーシスビームの制御装置にアクセスします。簡易診断ルーチンを実行すると、レーザーに主要な機能(**名前順に文字列をソートする**スクリプト)がないことが判明しました。

レーザーを再起動するため、このソートスクリプトを書き換えます。

## ソートの実行

コードフォルダに、スクリプト`sortOrder.js`を作成します。このスクリプトは、**2つのコマンドライン引数**を受け取ります。引数は、一組の文字列であり、それを比較して名前順で先になる方を確認します(大文字/小文字の区別は重要ではありません)。

作成したスクリプトをテストするには、次のように実行します。

```bash
node sortOrder.js cats dogs
```

作成したスクリプトは、名前順で最初の文字列が2番目の文字列より前、後、同じ位置(等価)にあるかを判断します。それぞれの場合に、`console.log`とともに以下のように数値を出力します。

- 名前順で最初の引数が2番目の引数**より前**にある場合は、`-1`を出力します。
- 名前順で最初の引数が2番目の引数と**同じ位置**にある場合は、`0`を出力します。
- 名前順で最初の引数が2番目の引数**より後**にある場合は、`1`を出力します。

スクリプトにこの比較機能を実装できた場合は、[_HACK_]ボタンをクリックし、このレーザーを再起動します。

<% } else { %>

ステーシスビームの制御状況を調べましたが、現在ロックダウンされています。このレーザーを有効にするには、**植物学者のアクセスコード**が必要です。

植物学者はラボの**南ウィング**にいるものと思われます。そこは、植物の寿命にDucktypiumが与える影響について研究されていた場所です。

**植物学者に話しかけて**、このビームのアクセスコードを受け取ります。

<% } %>
