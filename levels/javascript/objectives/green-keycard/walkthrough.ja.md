# Twilioアカウントのセットアップ

ここでの目的は、[Twilioアカウントを取得](https://www.twilio.com/try-twilio?utm_source=twilioquest-3)し、Twilioとのやり取りに必要なアカウントの認証情報を見つけることです。これらの認証情報は、TwilioQuestによりあなたのコンピューターにローカルで保存されます。これらの情報は、Twilioに関連したコーディングに関する課題の進捗を確認するために使用されます。

## アカウントの認証情報を取得する

[Twilioアカウントにサインアップ](https://www.twilio.com/try-twilio?utm_source=twilioquest-3)すると、Twilioアカウントの認証情報が[Consoleのホームページ](https://www.twilio.com/console)に表示されます。

<center>
<img src="images/basic_training/account-sid-auth-token.png" />
</center>
これらの値の内容や使用目的について疑問に思うことでしょう。

- **TwilioアカウントSID:** [電話番号](https://www.twilio.com/console/phone-numbers/incoming)、[発信者ID](https://www.twilio.com/console/phone-numbers/verified)、[メッセージングサービス](https://www.twilio.com/console/sms/services)、その他Twilio APIの使用に関連する無数のリソースの集合体をカプセル化した、Twilioアカウントの一意の識別子。
- **Twilio認証トークン:** TwilioアカウントへのAPIアクセスのためのパスワード。この値の取り扱いには注意し、[バージョン管理システム](https://en.wikipedia.org/wiki/Version_control)にこの値をコミットするというよくあるミスを犯さないようにしてください。

これらの値は、[Twilio REST API](https://www.twilio.com/docs)にアクセスするためのユーザー名とパスワードとして使用します。

## アカウントセキュリティに関する注記

本番アプリケーションで使用しているTwilioアカウントの認証情報をTwilioQuestで使用することはお勧めしません。弊社の検証コードや自動化コードは、できるだけ目立たないように設計されていますが、本番で利用しているTwilio APIの認証情報へのアクセスをTwilioQuestに許可すると、予期せぬ結果を招く可能性があります。そのため、TwilioQuest専用の[新規プロジェクト作成](https://www.twilio.com/console/projects/create)を検討してください。

TwilioQuestで使用するために提供するAPI認証情報は、正常に検証した後に[**設定**]メニューで編集できます。この認証情報は、いつでも変更や消去ができます。探検中に[**Settings**]メニューを開くには、*O*キーを押すか、画面上部のHUDバーにある[**Settings**]アイコンをクリックします。

## バリアをクリアする

右側のテキストフィールドにTwilioアカウントのSIDと認証トークンの両方を入力し、[*HACK*]ボタンを押します。認証情報が検証され、正しい場合はこのチャレンジに勝利したことになります。