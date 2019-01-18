---
id: rooms 
title: Rooms
sidebar_label: Rooms
---
 **Tellbot chats** are comprised of **Rooms**: a single place for messaging and commands. All communications will happen within this or another **Room**.
 
 A room is a section within chat that serves some purpose of communication and has specific list of **Actions** and **Topics**. Room provides just the markup and does not describe it’s behavior. Behavior is described by **Buttons' handlers** and **Message handlers**.
  
 **Rooms** can be organized around anything: different topics of conversation, groups of commands etc.

 Just think of all old chat systems that we had before. There had been rooms where people talked on different topics. Or think of **Slack** that has **channels**. Each channel is dedicated to specific topic. The same is with **Rooms** in TellBot. But in terms of **Bots** each room is created for some purpose and has own list of commands. 
 
  > ⚠ Warning! If your bot has moderate or higher complexity it's recommended to divide functionality by different Rooms to improve UX. 
       
 **Room** consists of the following components:
  1. Text
  2. Inline buttons
  3. Keyboard buttons
  4. Topics. 
 
  
    📝 A bot may consists of one or more Rooms.
    
 ## Input Processing
 All user's input is processed relative to the Room he's in at the first priority and relative to the current topic at the second priority.
 
 ## Lifecycle
 All rooms are registered at **Rooms' registration phase.**
 
 ## Bindings
 All rooms are binded to **TellBot** instance, which it makes possible to get all of it's features including messages sending and getting list of chats inside it.
     
 ## Topics  
   **Rooms** may have **Topics of conversation** that describe list of actions within it.
    
   A **Topic** is used to let **TellBot** know in what context to process **User's input**.
   
   Read more on [**Topics** ](topics.md)
   
 ## Layout
  **Room's layout** is created with [**LayoutFactory** ](layoutFactory.md) method, available in **TellBot** Class.
  
  Layout consists of the following parts:
  1. Buttons
       - Inline
       - Keyboard
  2. Text

 ## Routing
 TellBot is created with **routing** in mind. To go from one **Room** to another a user should enter it's **key**. 
 
 
   
 A key can be entered by hand or pasted with the help of **Keyboard Buttons**.
 
 **Key** is just a string that opens room. Whenever **TellBot** receives a **key string** it sends **Room's layout** defined by you and sets Topic's value to **"init"**.
 
   > ⚠ Warning! Rooms' keys must be unique across the Bot.
  ### Going backwards
  Each **Room** has `parent` property to refer to **parent's room** that it's in. It lets user go to previous **Room** and thus improves **navigation**.
   
   **Root's room** `parent` property's value is **null**.
  ## Example
  For the sake of example let's imagine that we create a simple bot for storing user's passwords 🔑
  
  It may consists of different kinds of rooms, but say we want it to consists of the following ones: 
  
  | Room Name | Description | Key
  |--|--|--|
  | Lobby |  The very first room that user sees when initiates chat. It describes  bot's functionality, it's features and supported commands. May provide with actions.| `/start` |
  | Add Passwords |  It describes and provides with list of all possible commands available in this room.  | `add_password` |
  | Remove Passwords |  It describes and provides with list of commands that delete passwords.  | `remove_password` |
  

