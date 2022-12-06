const cowsay = require("cowsay");
const Quote = require('inspirational-quotes');
console.log(cowsay.say({
    text : Quote.getQuote({ author: false }).text,
    e : "88",
    T : "U "
}));