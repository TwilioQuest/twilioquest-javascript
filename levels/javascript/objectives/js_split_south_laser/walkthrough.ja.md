\<% const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE; const isObjectiveReady = worldState.southWing \&\& worldState.southWing.hadSavedConversation; %>

# レーザーの再起動

\<% if (isObjectiveReady) { %>

南ウィングで学んだ条件付きロジックの知識を活かし、この課題に挑戦してください!次の場所にあるコードフォルダに、ファイル`sortOrder.js`を作成します。

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

次のコードを開始点として使用します。

```js
const firstValue = process.argv[2];
const secondValue = process.argv[3];

// Your comparison code (if statements) go here
```

最初の値が2番目の値よりもアルファベット順で前、同じ、または後であるかに応じて、3つのいずれかの値を出力するコードが必要です。次のようにスクリプトが実行された場合、

```bash
node sortOrder.js cats dogs
```

出力は`-1`になります(`cats`は`dogs`よりもアルファベット順が前)。次のように実行された場合は、

```bash
node sortOrder.js cats CATS
```

`0`が出力されます(文字列`cats`と`CATS`はアルファベット順が同じ)。また、次のような場合は、

```bash
node sortOrder.js dogs cats
```

`1`が出力されます(`dogs`は`cats`よりもアルファベット順が後)。

[文字列のアルファベット順を比較](https://javascript.info/comparison#string-comparison)するコードを作成してください。文字列の大文字を変換してから比較するために、[toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)も使用してください。

南ウィングでのタスクとよく似た手順のため、必要があればそのときのコードを参照するとよいでしょう。

[Objective]の指示どおりに実行できたら、[_HACK_]をクリックしてください。きっとできます!

## 役に立つリソース

- [MDN条件リファレンス](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [JavaScript.info - 文字列比較](https://javascript.info/comparison#string-comparison)

\<% } else { %>

ステーシスビームの制御状況を調べましたが、現在ロックダウンされています。このレーザーを有効にするには、**植物学者のアクセスコード**が必要です。

植物学者はラボの**南ウィング**にいるものと思われます。そこは、植物の寿命にDucktypiumが与える影響について研究されていた場所です。

**植物学者に話しかけて**、このビームのアクセスコードを受け取ります。

\<% } %>