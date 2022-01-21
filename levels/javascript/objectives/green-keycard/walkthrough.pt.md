# Configuração da conta da Twilio

O objetivo aqui é [adquirir uma conta da Twilio](https://www.twilio.com/try-twilio?utm_source=twilioquest-3) e localizar as credenciais da conta que você precisará para interagir com a Twilio. Essas credenciais serão armazenadas localmente no computador pelo TwilioQuest. Elas serão usadas para validar e acelerar seu progresso por meio dos desafios de código relacionados à Twilio.

## Como obter as credenciais da sua conta

Após [se inscrever em uma conta da Twilio](https://www.twilio.com/try-twilio?utm_source=twilioquest-3), você encontrará suas credenciais da conta da Twilio na [página inicial do console](https://www.twilio.com/console).

<center>
<img src="images/basic_training/account-sid-auth-token.png" />
</center>
Você pode estar se perguntando quais são esses valores e para que são usados.

- **SID da conta da Twilio:** Um identificador exclusivo para a conta da Twilio, encapsulando uma coleção de [números de telefone](https://www.twilio.com/console/phone-numbers/incoming), [IDs de autor da chamada](https://www.twilio.com/console/phone-numbers/verified), [serviços de mensagens](https://www.twilio.com/console/sms/services) e muitos outros recursos relacionados ao uso da API da Twilio.
- **Token do Twilio Authy:** Uma senha para acesso à API da sua conta da Twilio. Tenha cuidado com este valor e não cometa o erro comum de fazer um commit dele em um [sistema de controle de versão](https://en.wikipedia.org/wiki/Version_control).

Você usará esses valores juntos como um nome de usuário e senha para acessar as [APIs REST da Twilio](https://www.twilio.com/docs).

## Observações sobre a segurança da conta

Não recomendamos o uso de credenciais para uma conta da Twilio usada por seus próprios aplicativos de produção no TwilioQuest. Embora nosso código de validação e automação seja projetado para ser o mais discreto possível, conceder ao TwilioQuest acesso às credenciais de API de produção pode ter consequências imprevistas. Considere a [criação de um novo projeto](https://www.twilio.com/console/projects/create) para usar com o TwilioQuest especificamente.

As credenciais de API que você fornece para o TwilioQuest usar podem ser editadas no menu **Configurações** após validá-las com êxito. Você pode alterá-las ou apagá-las a qualquer momento. Abra o menu **Configurações** durante a exploração pressionando a tecla *O* ou clicando no ícone **Configurações** na barra do HUD na parte superior da tela.

## Como remover a barreira

Digite o SID da conta da Twilio e o token de autenticação nos campos de texto à direita e pressione o botão *HACK*. As credenciais serão validadas e, se estiverem corretas, você terá vencido este desafio.