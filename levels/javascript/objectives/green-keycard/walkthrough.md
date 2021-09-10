# Twilio Account Setup

The objective here is to [acquire a Twilio account](https://www.twilio.com/try-twilio?utm_source=twilioquest-3) and locate the account credentials you will need to interact with Twilio. These credentials will be stored locally on your computer by TwilioQuest. They will be used to validate and speed your progress through Twilio-related code challenges.

## Getting your account credentials

Once you have [signed up for a Twilio account](https://www.twilio.com/try-twilio?utm_source=twilioquest-3), you will find your Twilio account credentials on [your Console home page](https://www.twilio.com/console).

<center>
<img src="images/basic_training/account-sid-auth-token.png" />
</center>

You might be wondering what these values are, and what they are used for.

- **Twilio Account SID:** A unique identifier for your Twilio account, encapsulating a collection of [phone numbers](https://www.twilio.com/console/phone-numbers/incoming), [caller IDs](https://www.twilio.com/console/phone-numbers/verified), [messaging services](https://www.twilio.com/console/sms/services), and myriad other resources related to Twilio API usage.
- **Twilio Auth Token:** A password for API access to your Twilio account. Be careful with this value, and do not make the common error of committing it to a [version control system](https://en.wikipedia.org/wiki/Version_control).

You will use these values together as a username and password for accessing the [Twilio REST APIs](https://www.twilio.com/docs).

## Notes on account security

We do not recommend using credentials for a Twilio account used by your own production applications in TwilioQuest. While our validation and automation code are designed to be as unobtrusive as possible, granting TwilioQuest access to your production API credentials could have unforeseen consequences. Consider [creating a new project](https://www.twilio.com/console/projects/create) to use with TwilioQuest specifically.

The API credentials you provide for TwilioQuest to use can be edited in the **Settings** menu after successfully validating them. You can change or erase them at any time. Open the **Settings** menu while exploring by pressing the *O* key, or clicking on the **Settings** icon on the HUD bar at the top of the screen.

## Clearing the barrier
Enter both your Twilio account SID and auth token in the text fields to your right, and press the *HACK* button. Your credentials will be validated, and if they are correct, you will have prevailed in this challenge.
