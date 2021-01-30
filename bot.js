const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Online.');
});

client.on('message', async message => {
  if (message.author.bot) return;
  let prefix = 'LS!'; //customized. you can change it whatever you want.
  if (!message.content.startsWith(prefix)) return; // use this so your bot will be only executed with prefix.

  let args = message.content
    .slice(prefix.length)
    .trin()
    .split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmb = args.shift().toLowerCase();
  // Type all the messages you want over here. Use the command given below for example.

  if (msg.startsWith(prefix + `ping`)) {
    // Instead of ping, you can type any command. Example, help.
    message.channel.send('pong'); //What the bot will respond with

    // Make sure all messages commands are under this client.
  } // easy way.
});

client.login(process.env.BOT_TOKEN2);
