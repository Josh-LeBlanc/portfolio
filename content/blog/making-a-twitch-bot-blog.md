---
title: "Making a Twitch Bot"
date: "2025-05-14"
tag: "project"
excerpt: "Making a twitch bot is not as easy as I would have expected. This is a quick tutorial that I wish twitch had on their website."
---
I was originally expecting to sit down and have this done in a few dozen lines of python, similar to how it went when I wrote a discord bot. Boy was I wrong. I had a lot of problems, and Twitch's documentation is not very helpful, so I struggled for a little while, and am compiling everything here so you don't have to.
# step 1: creating the app
This part was not that hard. Twitch has a developer portal, you just go there and log in and create an Application. There are already a few minor annoyances like having to enable two factor authentication for you account, which means giving them your phone number.Also naming the app, which apparently just has to be unique to all other apps, but I tried so many combinations of words that there must have been some other constraint I was hitting. I literally ended up mashing the keyboard and naming my app `sdflovmsdfvospdvimssdfovimfvsdfvsdpoimv`. It doesn't really matter, the only time you see the name is when you have to authenticate it with you account for an OAUTH token, and in my case I will be the only one doing that, I am just making this bot for myself.

 Set the OAuth address to `http://localhost:3000`, we will be using that later to get an OAUTH token.
 # step 2: code for the bot
My original plan was to write this in python, because it's an easy language that I'm quite familiar with. I was looking at a python library that interacted with the Twitch API via IRC, and after a bit realized I don't think it's an official twitch library and it might actually not even be trustworthy so I switched to javascript.

Twitch provides some example chatbot code [here](https://dev.twitch.tv/docs/chat/chatbot-guide/). It just checks your OAUTH token, then starts a websocket session to listen for events. Then it registers an [EventSub](https://dev.twitch.tv/docs/eventsub/) listener that listens for messages being sent in the chat of the selected channel. Then your chat messages will come through the websocket connection, it checks for the message `HeyGuys` being sent and replies with `VoHiYo`. However, we're getting ahead of ourselves here. All you have to do is follow the instructions on that page. Set up the directory and node environment, copy paste the code and install the websocket package with `npm`. Now we can get onto the fun part: Secrets.
# step 3: secrets
alright, we have to fill out the constants at the top that hold the secrets. If your code is going anywhere other than your own computer, you should use environment variables to store these, I did it with the `dotenv` node package like this.
```bash
# .env
BOT_USER_ID="<bot user id>" # these need to be filled with the actual strings
OAUTH_TOKEN="<oauth token>"
# ... other ones go here
```
```javascript
// bot.js
import dotenv from 'dotenv';
dotenv.config();

const BOT_USER_ID = process.env.BOT_USER_ID; // This is the User ID of the chat bot
const OAUTH_TOKEN = process.env.OAUTH_TOKEN; // Needs scopes user:bot, user:read:chat, user:write:chat
const CLIENT_ID = process.env.CLIENT_ID;
const CHAT_CHANNEL_USER_ID = process.env.CHAT_CHANNEL_USER_ID; // This is the User ID of the channel that the bot will join and listen to chat messages of
```
Ok, but how do we actually get the secrets that we need to put in the `.env` file? This was the most annoying part for me because (at least the parts that I was reading of) the Twitch documentation don't really explain this.
## secrets 1 & 2: CLIENT_ID and CLIENT_SECRET
These are the easiest to get, they are right in the Twitch Developer portal page where you created the Application. Slap those into your `.env`.
## secret 3: OAUTH token
Alright this is the most confusing secret and I'm not completely sure I fully understand it even now, but we need it to get our bot up and running. Twitch provides a github repo with a script that you need to run in order to get the oauth token [here](https://github.com/twitchdev/authentication-node-sample). Clone the repo, `npm install`, and then you have to fill out the constants in this script:
```javascript
// index.js
const TWITCH_CLIENT_ID = process.env.CLIENT_ID;
const TWITCH_SECRET    = process.env.CLIENT_SECRET;
const SESSION_SECRET   = 'josh';
const CALLBACK_URL     = 'http://localhost:3000/auth/twitch/callback';
```
Client ID and Client Secret are the secrets we got in the last step, Session secret can be anything, and for our purposes the callback URL is the one they provide. If you would like other people to be able to use your twitch bot you will need to make it something else, good luck with that can of worms. Now we are ready to run this script with `node index.js`, and it will start listening on port 3000.

Then, visit the URL below in a brower. Make sure you put your app's client ID in the place of <APP CLIENT ID>. You should change the redirect URI if you are not using localhost:3000. If you would like to add additional permissions, add them to the scope part. The ones there are the ones that are required for a bot that can read and write to the chat. I believe the state can be anything.
```
https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=<APP CLIENT ID>&redirect_uri=http://localhost:3000&scope=user%3Abot+user%3Aread%3Achat+user%3Awrite%3Achat&state=c3ab8aa609ea11e793ae92361f002671
```
If it works, you will be redirected to a URL that has a parameter called access token, and that is your oauth token! Save it in the `.env`.
## secrets 4 & 5: BOT_USER_ID and CHAT_CHANNEL_USER_ID
I believe this is how this works: every account on twitch has a User ID associated with it. The bot has a User Id that corresponds to the account that the bot sends it's messages from. The chat channel User Id is the User Id of that channel whose chat the bot is going to monitor. I am currently just using the same user ID for both, so the bot just responds in the chat as if it were me, which I think is fine.

To get your User Id, make the curl request shown below. If you want the bot to respond in chat as if it were you, use the client id and OAUTH token that we've generated. If you want it to respond as a different account, I believe you would have to create the new twitch account, and create the app in that account's developer portal, and get an OAUTH token associate with that account. Either way, fill out the OAUTH token and client id placeholders and make this request:
```bash
curl -H 'Authorization: Bearer <OAUTH TOKEN>' -H 'Client-Id: <APP CLIENT ID>' -X GET 'https://api.twitch.tv/helix/users'
```
That should return a response with some data, and id should be one of them, it should be a number that is ~8 digits. Save this as your BOT_USER_ID and CHAT_CHANNEL_USER_ID in the `.env`.
# secrets done :)
When it's all compiled here, it doesn't seem too complicated. I wish Twitch would have put something like this together to explain, so I didn't have to spend hours googling. But now we're ready to start the bot! In the bot's directory, `node bot.js` should get it up and running. Test it by saying `HeyGuys` in your chat and it should respond with `VoHiYo`. The bot script is pretty easily modifiable, most of the modifications will probably happen in the `handleWebSocketMessage` function. Depending on what you want the bot to do, you may need to add permissions to the OAUTH Token and regenerate it. I believe the [WebSocket Messages](https://dev.twitch.tv/docs/eventsub/websocket-reference/) documentation will be useful for extending the bot's capabilities.
# conclusion
That wasn't too hard! Currently, the only reason that I made this bot was to display my chat messages in my [sketchybar](https://github.com/FelixKratz/SketchyBar) so I stop missing them when I'm on other screens, so that's all mine does. But they're very extensible, so I'm sure I'll add on things in the future.
