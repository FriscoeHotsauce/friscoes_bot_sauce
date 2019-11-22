const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  client.user.setActivity("bot sauce");

  client.guilds.forEach(guild => {
    console.log("Bot is connected to: " + guild.name);
    guild.channels.forEach(channel => {
      console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
    });
  });
});

client.on("message", receivedMessage => {
  //don't trigger events off of bot messages
  if (receivedMessage.author == client.user) {
    return;
  }

  if (receivedMessage.content == "!H") {
    receivedMessage.channel.send(
      receivedMessage.author.toString() + " Don't shit where you eat",
      { tts: false }
    );
  }

  if (receivedMessage.content == "F") {
    receivedMessage.react("🇫");
    //receivedMessage.channel.send("F", { tts: false });
  }

  if (receivedMessage.content.includes("good bot")) {
    receivedMessage.channel.send(
      receivedMessage.author.toString() + " Thanks!",
      { tts: false }
    );
  }
});

client.login(process.env.FRISCOES_BOT_SAUCE);
