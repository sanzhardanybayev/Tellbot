---
id: doc3
title: TellBot Class
---


**Tellbot** class is responsible for the following tasks:

1.  Bot Initiation
2.  Rooms registration
3.  Events registration
4.  Answering
5.  Inline queries processing


## TellBot Class attributes

-   **token** - string
-   **options** - object
-   **backButton** - string
-   **birth** - Date
-   **rooms** - [ Room ]
-   **actions** - [ Object ] → Array of redux actions
-   **inlineQueriesKeys** - [ String ] → Array of inline buttons’s keys
-   **keyboardButtonsKeys** - [ String ] → Array of keyboard buttons’ keys
-   **roomKeys** - Map → Set of rooms’ keys
-   **store** - Object → Redux Store Object

## Tellbot methods

-   **setStore** → set bot’s storel
-   **addReducer** → add Reducer to the bot’s store
-   **setActions** → add Redux actions to the bot
-   **bindRoom** → bind room to the bot
-   **setRooms** → set Rooms to the bot
-   **registerRooms** → register rooms
-   **reply** → This method makes additional abstract layer to simplify message sending. It creates layout and sends
-   **attachInlineButtonsEventHandlers** → dynamic addition of Event Handlers for inline buttons.
-   **attachKeyboardButtonsEventHandlers →** dynamic addition of Event Handlers for keyboard buttons
-   **getChatTopic** → returns chat’s topic
-   **getChatRoom** → returns chat’s room name
-   **isGuest →** returns if user is a guest
-   **initChat →** initiate chat with the user  (makes updates in Redux store)
-   **onTextMiddleware →** this method checks if user has initiated conversation with the bot. If did not then it asks to initiate it
-   **getCurrentChat →** returns current chat
