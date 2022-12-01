const dotenv = require("dotenv");
dotenv.config();

const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Welcome to the HTTP Cats bot! 🤭\nWrite httpcat ${statusCode}...");
});

bot.hears(/httpcat ([1-5][0-9]{2})/, (ctx) => {
  const status = ctx.match[1];
  ctx.replyWithPhoto(`https://http.cat/${status}`);
});

bot.launch();
