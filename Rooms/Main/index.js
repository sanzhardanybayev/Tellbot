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
