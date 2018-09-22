
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
