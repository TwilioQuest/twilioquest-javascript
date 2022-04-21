# セキュリティ設定のオーバーライド

<div class="aside">
<h3>To-Doリスト</h3>
<ul>
  <li><code>laserConfiguration.js</code>というファイルを作成する</li>
  <li>変数<code>laserStatus</code>を宣言し、文字列「OFF」を設定する</li>
  <li>完了した後[<em>HACK</em>]をクリックする</li>
</ul>
</div>
別のバリアが主任サイエンティストのオフィスへのアクセスをブロックしています。少し調べると、レーザーフェンスをロックするJavaScriptコードにより、バリアが「ON」の位置に設定されていることが分かりました。このバリアを解除するため、**独自のJavaScriptコードによりこの設定をオーバーライドします**。

コードフォルダに、ファイル`laserConfiguration.js`を作成します。このファイル内で、[変数](https://en.wikipedia.org/wiki/Variable_(computer_science))`laserStatus`を宣言し、それに[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)値`OFF`を設定します。

この作業が完了したら、[*HACK*]ボタンをクリックし、作業内容を確認し、このセキュリティバリアのレーザー設定をオーバーライドします。