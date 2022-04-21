# 「関数」での「楽しみ」

<div class="aside">
<h3>To-Doリスト</h3>
<ul>
  <li><code>laserFunction.js</code>というファイルを作成する</li>
  <li>文字列「OFF」を返す関数<code>getLaserSetting</code>を作成する</li>
  <li>完了した後[<em>HACK</em>]をクリックする</li>
</ul>
</div>
事故処理の最中に、新しいセキュリティバリアがラボ内部のウィングをブロックしていることに気づきました。

このバリアのセキュリティを調べ、バリアのレーザーが`"ON"`か`"OFF"`かを判断する**JavaScript関数**によりバリアが駆動していることを認識してください。レーザーバリアを使用不能にするには、**この関数をオーバーライド**します。

コードフォルダに、ファイル`laserFunction.js`を作成します。このファイル内に、[JavaScript関数を作成し](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)、名前を`getLaserSetting`とします。この関数は、値`"OFF"`を持つ[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)オブジェクトを**返します**。

コードを準備した後、[*HACK*]ボタンをクリックし、laserコマンド関数をオーバーライドします。