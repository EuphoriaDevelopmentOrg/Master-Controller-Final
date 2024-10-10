const unirest = require('unirest');
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, PCEmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"steamunofficial",
    data: new SlashCommandBuilder()
    .setName("steamunofficial")
    .setDescription("Retrieves Steam/EGS Unofficial Server Info")
    .addStringOption(option => option.setName('server').setDescription('Enter Server Name').setRequired(true)),

run: async (client, interaction) => {

    const query = interaction.options.getString('server');
        
            unirest.get("https://api.battlemetrics.com/servers?filter[game]=ark&page[size]=25&filter[search]=\"" + query + "\"")
                .end(function (result) {
                    var json = JSON.parse(JSON.stringify(result.body));
                    if(result.status != 200) {
                        return interaction.followUp({ content: 'An error occurred whilst trying to connect to Battlemetrics!' });
                    } else {

                        var i = 0;

           const embed = new MessageEmbed()
           .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
           .setDescription(`ARK | PC Unofficial **[Server ${query}]**`)
           .setColor(PCEmbedColour)
           .setTimestamp()
           json.data.map(data => {
            i = i + 0;
            embed.addField(`${data.attributes.name}`,`Players: ${data.attributes.players}/${data.attributes.maxPlayers}\nMap: ${data.attributes.details.map}\nIP: ${data.attributes.ip}\nPort: ${data.attributes.port}\nStatus: ${data.attributes.status}`,true); 
           })
        i = i + 0;                         
        return interaction.followUp({ embeds: [embed] }).catch(error => {
            if (error.code === 50035) return interaction.followUp({ embeds: [exceedembed] })
        }); 
        }
    })
}
}