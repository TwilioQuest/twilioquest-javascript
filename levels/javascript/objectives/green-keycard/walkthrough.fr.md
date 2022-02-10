# Configuration d'un compte Twilio

L'objectif ici est [d'obtenir un compte Twilio](https://www.twilio.com/try-twilio?utm_source=twilioquest-3) et de localiser les informations d'identification du compte dont vous aurez besoin pour interagir avec Twilio. Ces informations d'identification seront stockées localement sur votre ordinateur par TwilioQuest. Elles seront utilisées pour valider et accélérer votre progression dans les défis en matière de code liés à Twilio.

## Obtenir les informations d'identification de votre compte

Une fois que vous vous êtes [inscrit à un compte Twilio](https://www.twilio.com/try-twilio?utm_source=twilioquest-3), vous trouverez vos informations d'identification de compte Twilio sur la [page d'accueil de votre console](https://www.twilio.com/console).

<center>
<img src="images/basic_training/account-sid-auth-token.png" />
</center>
Vous vous demandez peut-être quelles sont ces valeurs et à quoi elles servent.

- **Account SID Twilio&nbsp;:** Un identifiant unique pour votre compte Twilio, qui englobe un ensemble de [numéros de téléphone](https://www.twilio.com/console/phone-numbers/incoming), [d'ID d'appelant](https://www.twilio.com/console/phone-numbers/verified), [de services de messagerie](https://www.twilio.com/console/sms/services) et une myriade d'autres ressources liées à l'utilisation de l'API Twilio.
- **Auth Token Twilio&nbsp;:** Un mot de passe pour l'accès d'API à votre compte Twilio. Faites attention à cette valeur et ne faites pas l'erreur courante de la valider dans un [système de contrôle de version](https://en.wikipedia.org/wiki/Version_control).

Vous utiliserez ces valeurs conjointement comme nom d'utilisateur et mot de passe pour accéder aux [API REST Twilio](https://www.twilio.com/docs).

## Remarques sur la sécurité du compte

Nous vous déconseillons d'utiliser des informations d'identification pour un compte Twilio utilisées par vos propres applications de production dans TwilioQuest. Bien que notre code de validation et d'automatisation soit conçu pour être aussi discret que possible, l'octroi d'un accès TwilioQuest à vos informations d'identification d'API de production peut avoir des conséquences imprévues. Pensez à [créer un projet](https://www.twilio.com/console/projects/create) à utiliser spécifiquement avec TwilioQuest.

Les informations d'identification d'API que vous fournissez à TwilioQuest peuvent être modifiées dans le menu **Settings** (Paramètres) après les avoir validées. Vous pouvez les modifier ou les effacer à tout moment. Pour ouvrir le menu **Settings** (Paramètres) lors de l'exploration, appuyez sur la touche *O* ou cliquez sur l'icône **Settings** (Paramètres) sur la barre HUD en haut de l'écran.

## Supprimer les barrières

Saisissez le SID et le Auth Token de votre compte Twilio dans les champs de texte à droite, puis appuyez sur le bouton *HACK*. Vos informations d'identification seront validées et, si elles sont correctes, vous aurez remporté ce défi.