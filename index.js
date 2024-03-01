const dotenv = require('dotenv')
dotenv.config();
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.KEY, { polling: true });
const ig = require("ig-unduh");

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const link = msg.text;
  ig(link)
    .then((res) => {
      console.log(res.data[0].url);
      bot.sendMessage(chatId, res.data[0].url);
    })
    .catch((err) => {
      console.error(err);
    });
});