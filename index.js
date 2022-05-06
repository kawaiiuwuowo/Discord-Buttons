  const { MessageButton, MessageActionRow } = require('discord-buttons'); 
require('discord-buttons')(client);
  
  client.on("message", (message) => {
if (message.content !== "PREFIX + COMMAND NAME") return;
  const embed = new discord.MessageEmbed()
  .setTitle("ANY TIME")
  .setDescription("DESCRIPTION")
  .setColor('#800080')
  
  let BUTTON NAME = new MessageButton()
   .setLabel("LABEL")
   .setStyle("COLOR")
   .setEmoji("EMOJI")
  .setURL("LINK")
  .setStyle("url")


  message.channel.send({
    button: NAME,
    embed: embed 
  });
})
client.on('clickButton', async (button) => {
    if (button.id !== "NAME") return;
    button.reply.send('You are now following me.', true)
    
})
