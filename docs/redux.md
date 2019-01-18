---
id: redux
title: Redux Storage
sidebar_label: Redux Storage
---

 ## Storage 
 **Redux Store** is used to keep track of all chats and their states.  By accessing **array of chats** inside **Storage** you may get detailed information of what your **users are doing within your bot**.You can get the following information:
 1. Chat's id
 2. Room name
 3. Conversation topic
 3. Parent room
 4. Users's information 
       - First name
       - Second name
       - Username
       - Account Type
       

 
 
Let's see how it's structured in **Redux Store** with the following diagram:


![Redux Store Structure](/img/Redux%20Store.png)

## Binding
**Redux store** is binded to **TellBot** instance. Thus, you can access to it from **Rooms**, **Buttons' handlers**, **Phone Calls' handlers**.

## Code example | How to get list of chats 
```javascript
const TellBot = require('tellbot-framework/TellBot')
const { token, name, options, backButton } = require('./config')

const bot = new TellBot(token, name, options, backButton)

// Get the initial state
bot.store.getState() // returns { chats: [] }

module.exports = bot
```
