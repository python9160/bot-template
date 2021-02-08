# bot-template

A simple bot template for discord.js
#
Start out by making a .env file with the bot token as follows:
```
BOT_TOKEN=secret token
```
#
Replace "secret token" with the special token generated from the Discord Developer Portal
#
# How to add commands
Go to index.js:17:4, and add an `else if` statement. There are two different ways of making a command.
#
The first way will have nothing on the end
```js
else if (mes === 'command-name') {
    msg.channel.send('what to reply with')
}
```
Only `b!command-name` will make the bot reply with `'what to reply with'`
#
The second way will just have it start with `'b!command-name'`, meaning that `'b!command-name abcdefg'` will also be accepted.
```js
else if (mes.startsWith('command-name')) {
    msg.channel.send('what to reply with')
}
```
#
Adding another command can be done by adding another `else if` statement.

```js
else if (mes === 'command-name') {
  msg.channel.send('what to send')
} else if (mes === 'time') {
  msg.channel.send(new Date())
}
```