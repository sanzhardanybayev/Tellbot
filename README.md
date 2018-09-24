[![https://t.me/sanzhardanybayev](https://img.shields.io/badge/💬%20Telegram-sanzhardanybayev-blue.svg)](https://t.me/sanzhardanybayev)
[![GitHub license](https://img.shields.io/github/license/sanzhardanybayev/Tellbot.svg)](https://github.com/sanzhardanybayev/Tellbot/blob/master/LICENSE)

# Introduction

This framework aims to simplify creation of Telegram bots by using OOP, MVC approaches and concepts.

  

It’s built upon:

1.  Telegram Bot API - [http://core.telegram.org/bots/api](http://core.telegram.org/bots/api)
2.  NodeJS Telegram Bot API - [https://github.com/yagop/node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
3.  Redux - [https://github.com/reactjs/redux](https://github.com/reactjs/redux)

  

👏  **Credits to** [**Pavel Durov**](https://www.instagram.com/durov)**,** [**Yagop**](https://github.com/yagop) **and** [**Dan Abramov**](https://twitter.com/dan_abramov)

👨‍💻 **Developed by** [**Danybayev Sanzhar**](https://www.facebook.com/s.danybay)

# Installation

To run the bot you need to do the following steps:

1.  Install all the packages

```
npm init
```
2.  Update **config.js file** with your credentials

```js	
module.exports = {  
  token: 'yourtoken',  
  name: '@yourbotname',  
  options: {  
  birth: null,  
  polling: true  
  },  
  backButton: '↩ Back'
};
```
3.  Run the **app.js file** 

```
node app
```
