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
