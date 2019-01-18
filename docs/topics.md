---
id: topics 
title: Topic of Conversation
sidebar_label: Topics
---
   ## Description  
   **Topic** is used to let **TellBot** know in what context to process **User's input**. 
   
   **They** create context for user's input and define what action handlers must be called at each user's input.
   
   Say, whenever bot receives a message
   from a user, how should he know in what context to process input? If we map a topic to an action and store it in **Redux Store**, a bot will know how to process user's input.
   Thus, he will know which handler must receive user's message depending on **Topic** of conversation.
   
     📝 The inital Topic of any Room is called "init"
    
   **Topics** drastically improve speed of development as user's input process is managed automatically by **TellBot** according to specific **Topic's hanlder**.
    
   ### Definitions   
   - **Topic** is action's descriptor.
   - **Topic** is a **String**. It's stored in **Redux Store**.
   
   
   > ⚠ Each action should have it's own topic, if it doesn't the default "init" topic will be applied.
   
 In the end, **Topics** are used for :
 1. Letting TellBot know in what context to process User's input
 2. Getting to know what users are doing within the bot.
 
## Lifecycle
   All topics gets registered at **Rooms' registration phase**.
   
   **Topics** get changed whenever some action must be made within **Room**. On new room entrance , **Topic** is automatically switched to **init**.
   
   
   
## Example
  
 Say we want to create a bot that is created for dating 💑 
 And we want it to consist of the following **Rooms**:
 1. Profile Room
 2. Find a partner Room

 For the sake of brevity I'll explain only one Room.
 Within **Profile Room**, we may do the following actions : **password reset**, **update profile** .
 
 Let's look at the diagram below:
   
  ![Profile Room's structure](/img/ProfileRoom.jpg)
 
 **Update function** consists of 3 commands: 
 1. Update username
 2. Update age
 3. Update sex
 
 Each of this actions should have appropriate topic to let bot know in when to bind user's input to this action.
 Otherwise, whenever user sends either username, age or sex, **bot will not know**  in what context to process it.

    💭 Usually topics have the same name as actions. Spaces between words are replaced by underscore.
In out case we'll have the following topics:
1. update_username
2. update_age
3. update_sex

With this topics in place, bot will know when user wants to update username, age or sex.
  
## Code example. Changing Topic.
Changing topic can be done inside room's actions. 
```javascript
 // First argument - Chat's id
 // Second argument - Room name
 // Third argument - topic's name
 this.actions.setRoomTopic( msg.chat.id, 'Tools', 'textOrImage')
```


