# よくあるトリック

この問題は、[「Fizz Buzz」と呼ばれる言葉あそび](https://learnjswith.me/javascript-fizzbuzz/)の一種です。特に意味のあるアルゴリズムではありませんが、条件についての知識を確認し、新しい種類の演算子を学ぶのに役立つでしょう!

## 割り切れる?剰余(モジュラス)演算子の使用

数値が別の数値で割り切れるかどうかを判別する必要があります。JavaScriptには(他の多くの言語でも)、そのための演算子があり、`Remainder Operator`と呼ばれています。この演算子は`%`で表され、数値を割った残りが返されます。

例:

```js
12 % 5 === 2;
4 % 2 === 0;
12 % 3 === 0;
```

ある数値が別の数値で割り切れる場合、`%`演算子は`0`を返します。

## スターターコード

次の場所に新しいJavaScriptファイルを作成します。

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>/fizzBuzz.js`.

次のスターターコードが使えます。

```js
const numberInput = Number(process.argv[2]);
let output = '';

if (false) {
  output += 'Java';
}

if (false) {
  output += 'Script';
}

if (false) {
  output = String(numberInput);
}

console.log(output);
```

さまざまな入力による結果を試してみてください。

```bash
node fizzBuzz.js 15
```

コードが正しく機能した後、[*HACK*]ボタンをクリックしてください!