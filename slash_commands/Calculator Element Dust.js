const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"elementdust",
    data: new SlashCommandBuilder()
    .setName("elementdust")
    .setDescription("Calculate time taken to Convert Element to Dust.")
    .addNumberOption(option => option.setName('element').setDescription('Enter Element Amount').setRequired(true))
    .addNumberOption(option => option.setName('terminals').setDescription('Number of Terminals')),

run: async (client, interaction) => {

    var element = interaction.options.getNumber('element');
    var terminals = interaction.options.getNumber('terminals');
    if(!interaction.options.getNumber('terminals')) {terminals = 1};

var percentage = 20;
var output = (percentage / 100) * element * 1000;
var crafted = (percentage / 100) * element * 1000 / 1000;
var Dust = " Dust";
var Ele = " (" + crafted + " Element)";
var time = 5000;
var usertime = element * time / terminals;
let days = Math.floor(usertime / 86400000);
let hours = Math.floor(usertime / 3600000) % 24;
let minutes = Math.floor(usertime / 60000) % 60;
let seconds = Math.floor(usertime / 1000) % 60;
var timeoutput = `${days}d ${hours}h ${minutes}m ${seconds}s`;
var icon = `https://cdn.discordapp.com/attachments/813528039106543617/963146306300313671/Terminal.png`

const embed = new MessageEmbed()
        .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
        .setColor(EmbedColour)
        .setTimestamp()
        .setThumbnail(icon)
        .addField(`ARK | Element Dust Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
        .addField("\tElement:", "```\n" + element + "```")
        .addField("\tTerminals:", "```\n" + terminals + "```")      
        .addField("\tDust Output:", "```\n" + output + Dust + Ele + "```")        
        .addField("\tConversion Time:", "```\n" + timeoutput + "```")                    
    return interaction.followUp({ embeds: [embed] }) 
    }
}