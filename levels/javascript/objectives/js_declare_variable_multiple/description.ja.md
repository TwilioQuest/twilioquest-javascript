# 補給品の宝箱を開く

<div class="aside">
<h3>To-Doリスト</h3>
<ul>
  <li><code>chestConfiguration.js</code>というファイルを作成する</li>
  <li>下表の記述どおりに3つの変数を宣言する</li>
  <li>完了した後[<em>HACK</em>]をクリックする</li>
</ul>
</div>
(あなたのような)TwilioQuestプログラムのオペレーターを対象とした、補給品が入った宝箱に気づきました。補給品の宝箱は、自由にアクセスできるはずですが、現時点ではロックされています。この補給品の宝箱にアクセスするには、**前に使用した設定のオーバーライドメソッドを利用できます**。

コードフォルダに、ファイル`chestConfiguration.js`を作成します。このファイル内で、以下の変数を宣言し、この宝箱のセキュリティ設定をオーバーライドします。

| 変数名| 値|
|----------|----------|
| `verifiedUser`| [ブール](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)値: `true`|
| `accessLevel`| [数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)値: `7`|
| `favoriteRobot`| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)値: `Cedric`に設定|

この作業が完了したら、[*HACK*]ボタンをクリックし、作業内容を確認し、このセキュリティバリアのレーザー設定をオーバーライドします。