---
id: doc1
title: Tellbot Telegram Framework
sidebar_label: About 
---

This Node.js framework aims to simplify creation of Telegram bots by applying OOP, MVC approaches and concepts.

It’s built upon:

1.  Telegram Bot API - [http://core.telegram.org/bots/api](http://core.telegram.org/bots/api)
2.  NodeJS Telegram Bot API - [https://github.com/yagop/node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
3.  Redux - [https://github.com/reactjs/redux](https://github.com/reactjs/redux)

  

👏  **Credits to** [**Pavel Durov**](https://www.instagram.com/durov)**,** [**Yagop**](https://github.com/yagop) **and** [**Dan Abramov**](https://twitter.com/dan_abramov)

👨‍💻 **Developed by** [**Danybayev Sanzhar**](https://www.facebook.com/s.danybay)

[![https://t.me/sanzhardanybayev](https://img.shields.io/badge/💬%20Telegram-sanzhardanybayev-blue.svg)](https://t.me/sanzhardanybayev) 

# 😎 Motivation 
When I started creating my very first **Telegram Bot** I came across one issue  - **code overloading**. 
When I finished it, it was about **~700 lines of code** in one file. Which is not good at all. It was very hard to maintain it and make changes. There was no **design pattern** or **predefined code structure (scaffolding)** at all. I made a little research 
and found out that there's no such a **framework** that would allow create bots with ease and fast. 

So, I decided to create it by my own.

My main **goal** was to create an new **Abstract Layer** that would simplify creation of bots by taking advantage of **OOP, MVC**, writing tons of **helpers classes** and introducing new **concepts (Classes)**  in my framework that would drastically increase speed of development.

Here's the list of new concepts:
1. Rooms
2. Keys
3. Topics
4. Buttons



# Installation

To run the bot you need to do the following steps:

1. Clone the repository
```git
git clone https://github.com/sanzhardanybayev/Tellbot
```
2.  Install all the packages

```
npm install 
```
3.  Update **config.js file** with your credentials

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
