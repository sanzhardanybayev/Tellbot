/**
 * @description BirthPlace of the bot
 * @type {TellBot}
 */
const TellBot = require('tellbot-framework/TellBot')
const { token, name, options, backButton } = require('./config')
const Rooms = require('./Rooms/index')

const bot = new TellBot(token, name, options, backButton)

bot.setRooms(Rooms)
bot.registerRooms()

module.exports = bot
