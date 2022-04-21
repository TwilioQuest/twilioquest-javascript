# 引数の取得

このオブジェクティブでは、[コマンドライン引数](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)の概念について学びます。これは、JavaScriptコードの実行時に渡されるデータで、実行時のコンテキストを指定するために使用されます。

これまでに実行したテストスクリプトには、次のようなコマンドを使用しました。

```bash
node someProgram.js
```

コードを実行すると、記述した命令が実行されます。

しかし、プログラムに初期データを渡すと便利な場合があります。この初期データは**引数**と呼ばれます。引数を使用してスクリプトを実行するために、コードのファイル名の後に、スペースで区切り文字列を追加します。3つの引数を使用したスクリプトの実行例:

```bash
node someProgram.js "argument one" "another argument" allOneWordNoQuotes
```

これらの引数にコード内でアクセスするために、[process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)という特殊なリストを使用します。

このオブジェクティブでは、コマンドライン引数を使用するプログラムを作成します。最初は難しいところがあるので、次のコードを参考に進めてください。

```js
// The line of code below reads in the value of the argument passed in after
// the name of your script
const argumentValue = process.argv[2];

// This line of code converts the argument to a numeric value
const numberValue = Number(argumentValue);

// This line of code divides the input number by two, and stores the result in
// a variable named "result"
const result = numberValue / 2;

// You need to finish the line of code below! How would you print out the
// result to the terminal window without hard coding the number 42?
console.log(42);
```

コードディレクトリの`divideByTwo.js`ファイルに上記コードを追加します。コードフォルダの場所はこちらです。

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

その後、プログラムの最終行を変更して、入力値を2で割った値を出力できるようにします。コードのテストは、次のようにターミナルから実行します。

```bash
node divideByTwo.js 400
```

コードが正しければ、実行後に数値`200`が出力されます。正しく機能させるには、上記のスターターコードを編集する必要があります!

スクリプトが正しく実行された後、[*HACK*]ボタンをクリックしてください。

## 役立つリソース

* [Node.js - コマンドライン引数](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
* [process.argv参考資料](https://nodejs.org/docs/latest/api/process.html#process_process_argv)