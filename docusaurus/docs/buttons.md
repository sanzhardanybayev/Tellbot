---
id: buttons
title: Buttons
sidebar_label: Buttons
---

 **Button** is a UI element that invokes appropriate handler on user's click. Buttons' creation is implemented in Object Oriented way. In **TellBot** you have **Button** class that is used to create them.
 It consists of the following properties:
 1. `text`
 2. `type`
 3. `handler`

**Buttons'** types:
1. Inline
2. Keyboard

## Bindings
All buttons, along with their handlers,  get binded to the **TellBot**. Which provides them with Telegram API functionality. Thus, you can process user's input with it, change **Topics** and reply to the user with handlers.
  
   > ⚠ Don't use arrow functions for handlers, as they won't get binded to TellBot
## Inline Buttons
 Inline button’s name must be unique within one room, and can be repeated in other rooms.
**TellBot** will call corresponding handler relative to **Room** he's in.
 
 This is how they look like:
![Inline Buttons Example](/img/Inline%20Buttons%20Example.png) 
## Keyboard Buttons
Keyboard button's name must be unique within one room, and can be repeated in other rooms. **TellBot** will call corresponding handler relative to **Room** he's in.

This is how they look like:
![Keyboard Buttons Example](/img/Keyboard%20Buttons.png) 

## Code example
```javascript
// Inline button
const inlineButton = new Button('Click me', 'inline', (msg) => {
  this.reply(msg.chat.id, { type: 'TEXT', 'You just clicked me!'})
})

//Keyboard button
const keyboardButton = new Button('Get current date', 'Keyboard', (msg) => {
  this.reply(msg.chat.id, {type: 'TEXT', new Date().toString()}) 
})
```
