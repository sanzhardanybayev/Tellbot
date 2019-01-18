## Code example 

```javascript
// ./Actions/index.js

function returnCreator(msg){
  this.sendMessage(msg.chat.id, '[Danybayev Sanzhar](https://www.facebook.com/s.danybay) 😎', {
    parse_mode: 'markdown'
  })
}

function sendLove(msg){
  this.sendMessage(msg.chat.id, '♥ Love ya too')
}

function getCurrentDate(msg){
  this.sendMessage(msg.chat.id, new Date().toDateString())
}


module.exports = {
  returnCreator,
  getCurrentDate,
  sendLove
}

```
```javascript
// ./Buttons/index.js
const Button = require('tellbot-framework/Button');
const {  sendLove, returnCreator, getCurrentDate} = require('./Actions/index');

module.exports = (type) => {
  switch(type) {
    case 'inline':
      return [
        new Button('Who is my creator? 👨‍💻', 'inline', returnCreator),
        new Button('What date is it?🤔', 'inline', getCurrentDate)
      ];
    case 'keyboard':
      return [
        new Button('Give love ♥', 'keyboard', sendLove)
      ];
    default:
      return [];
  }
};

```
```javascript
// mainRoom.js
const Room = require('tellbot-framework/Room')
const { LayoutFactory } = require('tellbot-framework/Factories')
const getButtons = require('./Buttons/index')


const MainRoom = new Room('Main', null, 'BOTH', '/start', 'init')

MainRoom.setLayout(LayoutFactory.create({
  type: MainRoom.layoutType,
  text: `Welcome to TellBot ⚡`,
  columns: [2, 2],
  buttons: getButtons('inline'),
  keyboardButtons: getButtons('keyboard')
}))

MainRoom.setInlineButtons([...getButtons('inline'), ...getButtons('addChannel')])
MainRoom.setKeyboardButtons(getButtons('keyboard'))


module.exports = MainRoom

```

