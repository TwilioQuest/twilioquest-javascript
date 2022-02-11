# 引数での勝利

<div class="aside">
<h3>To-Doリスト</h3>
<ul>
  <li><code>politeLasers.js</code>というファイルを作成する</li>
  <li><code>getLaserSetting</code>関数を作成します。これは、1つの文字列引数を取る関数です。</li>
  <li>引数が「please」である場合は、文字列「OFF」を返し、そうでない場合は、文字列「ON」を返します。</li>
  <li>完了した後[<em>HACK</em>]をクリックする</li>
</ul>
</div>
このセキュリティバリアも故障していますが、間もなく理由が分かります。IT部門の旧友Glenは、丁寧に依頼された場合にのみ、このセキュリティバリアを停止するように設定していました。

このバリアを解除するには、[引数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)(別名「パラメーター」)を受け取る関数を作成し、基本的な[ブールロジック](https://javascript.info/ifelse)をいくつか実行します。

関数の引数の詳細については、「ヘルプ」セクションをご覧ください。ブールロジックの使用に関するヘルプが必要な場合は、先にラボの**南ウィング**の課題を克服してください。

## バリアの解除

これまでのバリアと同様に、このバリアも、バリアのレーザーが`"ON"`か`"OFF"`かを判断する**JavaScript関数**により駆動しています。レーザーバリアを使用不能にするには、**この関数をオーバーライド**します。

コードフォルダに、ファイル`politeLasers.js`を作成します。このファイル内に、前回の課題と同様、[JavaScript関数を作成し](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)、名前を`getLaserSetting`とします。

今回作成する関数は、`getLaserSetting`関数の**最初の引数**に応じてさまざまな値を返します。最初の引数が文字列`please`である場合は、`OFF`を返します。最初の引数がそれ以外の場合は、`ON`を返します。

コードを準備した後、[*HACK*]ボタンをクリックし、laserコマンド関数をオーバーライドします。