---
id: phoneCalls
title: Phone Calls 📞
sidebar_label: Phone Calls 📞
---
   A **Phone  call** is an  inline callback query. It's used to invoke bot's functionality from private chats, groups or channels.
   
   This is how it looks like: 
   ![Inline Query Example](/img/Inline%20Query%20Example.jpg)
    
   ## Binding
   **Phone Calls** get registered at **Room Registration Phase**.
   
   > ⚠ Don't use arrow functions for handlers, as they won't get binded to TellBot.
    
   ## Code example
   To create a **Phone Call** handler, you just need to do the following steps:
   1. Create function that accepts **inline_query** argument
   2. Add this function to the **Room**
 
   
  
   ### Step #1. Create **Phone Call** handler. 
   ```javascript
    function sayHello(inline_query){
          this.answerInlineQuery(inline_query.id, [{
             type: 'article',
             id: 123123,
             title: 'TellBot Node.JS Telegram Framework',
             disable_web_page_preview: true,
             input_message_content: {
               message_text: 'This bots aims to simplify creation of bots!'
             }
           }], {
             cache_time: 0
           })
    }
```
  ### Step #2. Add Phone Call's Handler to the Room.
  ```javascript
  const Tools = new Room('Profile', null, 'Text', '/start')
  Tools.inlineQuery = [sayHello]
```
   
