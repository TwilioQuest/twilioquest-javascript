# Lifeあれ

<div class="aside">
<h3>To-Doリスト</h3>
<ul>
  <li><code>treeLifeDetector.js</code>というファイルを作成する</li>
  <li>コマンドライン引数として数値<code>0</code>が渡された場合は、<code>alive</code>を出力する</li>
  <li>コマンドライン引数として別の数値が渡された場合は、<code>other</code>を出力する</li>
</ul>
</div>
ラボで西の橋の延長方法を探している間に、このコントロールパネルを発見しました。明らかに、ラボの**Tree Life Detector**システムが損傷していたため、西の橋は使用不能です。

**Tree Life Detectorを修復し**、植物学者の方に向けて前進を続けます。

## Tree Life Detectorの修復

コードフォルダに、ファイル`treeLifeDetector.js`を作成します。このプログラムは、1つの**コマンドライン引数**(ツリーの現在のライフステータスを示す1桁の`Number`)を受け取ります。コントロールパネルの横にツリーライフステータスIDに対応する判読可能な文字列が掲示されます。

| ツリーライフステータスID| ツリーステータス|
|----------|----------|
| 0| "alive"|
| 1| "other"|
| 2| "other"|
| 3超| "other"|

スクリプトを実行すると、渡されたID番号に応じて適切な判読可能な文字列テキストが出力されます。

スクリプトを次のように実行した場合:

```bash
node treeLifeDetector.js 0
```

文字列`alive`が出力されます。

スクリプトを別の数値で次のように実行した場合:

```bash
node treeLifeDetector.js 2
```

文字列`other`が出力されます。

`treeLifeDetector.js`スクリプトがこのように動作した後に、[*HACK*]ボタンをクリックし、修理内容を確認します。