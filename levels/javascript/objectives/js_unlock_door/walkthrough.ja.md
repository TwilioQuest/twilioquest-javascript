# JavaScriptコードの実行方法

この演習の目標は、コンピューター上でJavaScriptプログラムを作成、実行する方法に習熟することです。この演習には、課題の完了に必要なすべてのコードが用意されています。今後の演習では、より多くのコードを自分で作成することになります。

<details>
<summary>手順1: JavaScriptコードファイルを作成する</summary>
まず、コンピューター上のTwilioQuestワークスペースとして作成したフォルダ内に、新しいファイル`sayPlease.js`を作成します。なお、該当するフォルダは次の場所にあります。

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

**ファイル拡張子**(`.js`部分)は、作成しているファイルの種類を示します。サウンドファイルには、`.mp3`拡張子が付いています。Microsoft Word文書には、`.docx`拡張子が付いています。JavaScriptファイル(通常)には、`.js`拡張子が付いています。

ターミナルインターフェイスを使用してこうしたファイルを作成すると便利です。後からJavaScriptコードを実行する場合にも、このインターフェイスを使用するためです。

MacまたはLinuxでファイルを作成するには、ターミナルアプリで次のコマンドを使用します。

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
touch sayPlease.js
```

WindowsのPowerShellでは、次のコマンドを使用します。

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
New-Item sayPlease.js
```

</details>
<details>
<summary>手順2: ファイルを開いて解決方法のコードを作成する</summary>
JavaScriptファイルの作成後、そのファイルにコードを挿入する必要があります。Photoshopで画像ファイルを開いて編集するのと同様、コンピューターにプログラムをインストールしてコードファイルを編集します。プログラミングでは、こうしたツールを**統合開発環境(IDE)**または**テキストエディタ**と呼びます。

こうしたプログラムがインストールされていない場合は、[Visual Studio Code](https://code.visualstudio.com/)を試してください。VS Codeは比較的軽いプログラミングテキストエディタですが、すぐに使える役に立つ機能が数多く用意されており、コツをつかむと、非常に複雑で高度な作業を実行できるようになります。

VS Codeまたは選択したテキストエディタを使用し、`sayPlease.js`ファイルを開きます。最初は、ファイル内に何もないはずです。

この課題のため、実際に必要なコードがすべて用意されています。以下のコードをファイルにコピーします。コードの処理が分からない場合でも、すぐに分かるようになります。組み込みのJavaScript関数`console.log`を使用し、ターミナルウィンドウにテキスト行を出力します。

```js
console.log('Glen, will you please open the barrier?');
```

このコードをファイルに追加した後は、**必ず変更を保存してください。**これで、いつでもコードを実行して動作を確認できるようになりました。

</details>
<details>
<summary>手順3: コードを実行して動作を確認する</summary>
今度は、インストールしたNode.jsランタイムを使用し、`sayPlease.js`内部で実際にコードを実行します。通常、この作業を行うには、コンピューターのコマンドプロンプトアプリケーション(MacではTerminal.app、WindowsではPowerShell)を使用します。

ターミナルアプリケーションを開いて次のコマンドを入力し、「現在の作業ディレクトリ」が`sayPlease.js`を作成したフォルダであることを確認します。

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
```

次に、`node`コマンドを使用し、JavaScriptコードを実行します。

```bash
node sayPlease.js
```

上記のコマンドを実行した後、Glenへの依頼がコンソールに出力されるのが分かります。

</details>
TwilioQuest全般にわたり、前述のようにコードファイルを作成、編集し、実行するよう求められます。

`sayPlease.js`ファイルが実行でき、必要なメッセージを出力できる場合は、[*HACK*]ボタンをクリックし、IT部門に依頼します。