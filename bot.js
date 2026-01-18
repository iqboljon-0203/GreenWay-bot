require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

// Check for required environment variables
if (!process.env.BOT_TOKEN) {
  console.error('Error: BOT_TOKEN is missing in .env file.');
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);
const webAppUrl = process.env.WEBAPP_URL || 'https://green-way-one.vercel.app/';

// /start command handler
bot.start((ctx) => {
  const welcomeMessage = `
Welcome to *GreenWay*! 🌿

GreenWay is a smart platform that delivers fresh, high-quality farm products directly to you.
Fast, reliable, and eco-friendly — from farm to your table.
  `;

  ctx.replyWithMarkdown(welcomeMessage, Markup.keyboard([
    [Markup.button.webApp('🟢 Open GreenWay', webAppUrl)]
  ]).resize());
});

// Launch the bot
bot.launch().then(() => {
  console.log('GreenWay Bot is running...');
  console.log(`Web App URL configured: ${webAppUrl}`);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
