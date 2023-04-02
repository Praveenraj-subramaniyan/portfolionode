var express = require("express");
var router = express.Router();

router.post("/", async (req, res) => {
  try {
    // const { Telegraf } = require("telegraf");
    const TelegramBot = require('node-telegram-bot-api');
    const Token = "6102043056:AAGSXHVBjbsKG9c1RKRlb1F5m7Olmd_5sRE";
    const bot = new TelegramBot(Token, { polling: true });
    const chatId = "1048759782";
    const { name ,email,  mobile, message} = await req.body;
    console.log(name)
    console.log(email)
    console.log(mobile)
    console.log(message)
    bot
      .sendMessage(chatId, "Name: "  + name + "\n" + "Email: " + email + "\n" + "Mobile: " + mobile +  "\n" +"Message: " + message)
      .then(() => {
        res.status(200).send("True");
      })
      .catch((error) => {
        res.status(500).send("False");
      });
    res.status(200).send("True");
  } catch (error) {
    console.log(error);
    res.status(500).send("False");
  }
});

module.exports = router;
