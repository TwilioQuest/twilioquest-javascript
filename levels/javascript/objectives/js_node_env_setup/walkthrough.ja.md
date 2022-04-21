# オブジェクティブのヘルプ

この課題を完了するには、最初に[Node.jsをコンピューターにインストール](https://www.nodejs.org)します。このツールを使用し、作成方法を習得したJavaScriptコードを実行します。

## Node.jsランタイムへのフルパスの取得

Nodeをインストールすると、コンピューター上で使用するコマンドラインインターフェイスで、`node`と`npm`のコマンドを使用できるようになります。MacやLinuxのコマンドラインから、このコマンドを使用すると、Nodeランタイムへのフルパスを取得できます。

```bash
which node
```

WindowsのPowerShellでは、次のコマンドを使用できます。

```bash
Get-Command node.exe | Select-Object -ExpandProperty Definition
```

フルパスを取得したら、それを右側のテキストフィールドに貼り付け、[*HACK*]ボタンをクリックします。