---
id: doc2
title: Concepts Introduction
---
When you create bots with **Tellbot** it feels like creating mobile apps. You create **buttons**, their **handlers**, **different pages** and write **business logic**.
While interacting with it, you use it's functionality and go from one page to another to fulfill your goal.  

**Tellbot** is created with **Routing** in mind. 


1.  **Chat -** place where messaging happens. It contains information about user and his activity. Chat is stored in **Redux’s store.**
2.  **Room -** section within chat that is dedicated to some type of conversation which has specific list of actions. Room provides just the markup and does not describe it’s behavior.
4.  **Action -** something that will be done by the bot and returned to the user as the result. Actions can be triggered neither by inline nor keyboard button.
5.  **Entrance-** the first room where user comes in.
1.  **Phone -** an  inline callback query.
7.  **Button -** UI elements that invokes neither action nor redirect to another room
