---
id: chats 
title: Chats
sidebar_label: Chats
---
A **chat** is a place where messaging happens. It contains information about user and his activity. All chats are  stored in **Redux’s store**. The latter is used for the navigation, keeping track of users and gathering statistics. It's accessible via **TellBot** class.

You may think of a **chat**  as of **home**, that consists of **rooms** and has a **telephone line**. 
Just like any **home**, in TellBot each **room** serves specific purpose of communication , 
while **telephone line** lets people outside bot (in private chats, groups or channels) make a phone call (Inline Query) to trigger execution of some command. By Telegram API notation, a **Phone Call** is an
[**Inline Query**](https://core.telegram.org/bots/api#inline-mode).

In the end, any chat consists of:
1. [**Rooms**](rooms.md)
2. [**Phone calls**](phoneCalls.md)
3. [**Redux Store**](store.md)

  
   > ⚠ A chat must consist of at least one room.

## Code example. Getting list of chats.
```javascript
const TellBot = require('tellbot-framework/TellBot')
const { token, name, options, backButton } = require('./config')

const bot = new TellBot(token, name, options, backButton)

// Get the initial state
bot.store.getState() // returns { chats: [] }

module.exports = bot
``` 


