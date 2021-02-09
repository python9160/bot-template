const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

const prefix = 'b!'

client.on('ready', () => {
  console.log(`Logged on as ${client.user.tag}`)
});

client.on('message', (msg) => {
  if (msg.content.toLowerCase().startsWith(prefix)) {
    const mes = msg.content.toLowerCase().substring(prefix.length);
  }
  if (mes === 'hi') {
    msg.channel.send('Hi!')
  } else if (client.user.id in msg.mention.members) {
    msg.channel.send('Hello you just pinged me')
  }
});

if (process.env.BOT_TOKEN === 'bot token here') {
  console.log('Change the Bot token to run the bot')
} else {
  client.login(process.env.BOT_TOKEN)
    .catch((e) => {
      console.log("Invalid Token\n" + e)
    })
}