let Discord = require('discord.js');
let client = new Discord.Client();

client.on('ready', () => {
  //// client.user.setPresence({activity: { name:"Among you" }, status: "available"} )
});

client.on('message', message => {
  if (message.content == 'ping') {
    message.channel.send('pongsss');
  }

  if (message.content === 'embed') {
    let embed = new Discord.MessageEmbed()
      .setTitle('Hi I am title of embed')
      .setDescription('I am the description')
      .setColor('RED')
      .setFooter('I am the footer');

    message.channel.send(embed);
  }
});

client.login(process.env.BOT_TOKEN);
