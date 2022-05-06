const { MessageMenu, MessageActionRow } = require("discord-buttons")



    client.on("message", message => {
    if (message.content.startsWith(prefix + 'command name')) {
        var button1 = new MessageButton()
            .setLabel("LABEL")
            .setURL("URL LINK")
            .setEmoji("EMOJO")
            .setStyle("url")
      
      var button2 = new MessageButton()
            .setLabel("Starter")
            .setURL("URL LINK")
            .setEmoji("EMOJI")
            .setStyle("url")
     
      var button3 = new MessageButton()
            .setLabel("URL LINK")
            .setEmoji("EMOJI")
            .setURL("URL")
            .setStyle("url")

       var button4 = new MessageButton()
            .setLabel("LABEL")
            .setStyle("url")
            .setEmoji("EMOJI")
            .setURL("URL LINK")









      
        var row = new MessageActionRow()
            .addComponent(button1)
            .addComponent(button2)      
            .addComponent(button3)
            .addComponent(button4)
     

      
  

        var embed = new discord.MessageEmbed()
            .setTitle("codes")
            .setDescription("label")

        message.channel.send(embed, row)
    }
    })
