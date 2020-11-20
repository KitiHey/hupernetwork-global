const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Nzc3MTc2Nzk2MTY0MjU5ODgw.X6_oSw.nyjf_73no37ei-kfdQmCTILqAIw');