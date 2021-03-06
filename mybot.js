const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

  // Ignore other bots
  if (message.author.bot) {
    return;
  }

  // Only process commands beginning with the set prefix
  if (message.content.indexOf(prefix) !== 0) {
    // Debug
    // message.channel.send("Ignoring message that does not begin with prefix");
    return;
  }

  // Split input into commands and arguments
  const args = message.content.substring(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();
  
  message.channel.send("Command: " + command);
  message.channel.send("Args: " + args.join(", "));
  

  if (command === "ping") {
    message.channel.send("pong!");
    return;
  }

  if (command === "roll") {
    if (args.length < 1) {
      message.channel.send("'Roll' requires one argument");
      return;
    }
    var argRegex = /(\d*)d(\d*)/i;
    var match = argRegex.exec(args[0]);
    if (match == null) {
      message.channel.send("No applicable argument found");
    }
    if (match.length !== 3) {
      message.channel.send("Incorrect command format; values found: " + match.join(", "));
      return;
    }
    // Should probably put limits on these
    var x = match[1];
    var y = match[2];
    var results = [];
    for(var i = 0; i < x; i++) {
      results.push(Math.floor(Math.random() * y) + 1);
    }
    message.channel.send("Rolled the following numbers: " + results.join(", "));
    return;
  }
});

client.login("Snazzy Number That People Shouldn't See");
