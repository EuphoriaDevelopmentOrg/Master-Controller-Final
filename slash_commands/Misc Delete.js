const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { OwnerID, BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"delete",
    data: new SlashCommandBuilder()
    .setName("delete")
    .setDescription("Delete commands."),

run: async (client, interaction) => {

    const Owner = OwnerID.toString()//read data
    if(interaction.user.id !== Owner) {
        const embed = new MessageEmbed()  
        .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
        .setThumbnail(BotIcon)
        .setDescription("*Owner Command.*")
        .setColor(EmbedColour)
        .setTimestamp()
        return interaction.followUp({ embeds: [embed] })
    } else {

        const guild = client.guilds.cache.get("678923104289816597");
        client.application.commands.set([]);
        guild.commands.set([]);

const embed = new MessageEmbed()  
.setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
.setThumbnail(BotIcon)
.setDescription("*Deleted Commands.*")
.setColor(EmbedColour)
.setTimestamp()
return interaction.followUp({ embeds: [embed] })

}
}
}