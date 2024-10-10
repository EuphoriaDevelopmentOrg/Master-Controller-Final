let PS4BansAPI = "http://arkdedicated.com/ps4banlist.txt";
let PCBansAPI = "http://arkdedicated.com/banlist.txt";
let XBOXBansAPI = "http://arkdedicated.com/xboxbanlist.txt";
const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { JsonDatabase } = require("wio.db");
const db = new JsonDatabase({ databasePath:"./Database/Servers.json" });
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"arkinformation",
    data: new SlashCommandBuilder()
    .setName("arkinformation")
    .setDescription("View ARK's Ban count & More"),

run: async (client, interaction) => {
 
    //PS4BansAPI
    let response2 = await fetch(PS4BansAPI);
    let data2 = await response2.text();
    let filePath2 = data2;
    let to_string2 = filePath2.toString();
    let split_lines2 = to_string2.split("\n");
    let PS4Bans = `${split_lines2.length-1}`;
    //PCBansAPI
    let response4 = await fetch(PCBansAPI);
    let data4 = await response4.text();
    let filePath4 = data4;
    let to_string4 = filePath4.toString();
    let split_lines4 = to_string4.split("\n");
    let PCBans = `${split_lines4.length-1}`;
    //XBOXBansAPI
    let response5 = await fetch(XBOXBansAPI);
    let data5 = await response5.text();
    let filePath5 = data5;
    let to_string5 = filePath5.toString();
    let split_lines5 = to_string5.split("\n");
    let XBOXBans = `${split_lines5.length-1}`;

    //top 9 Searched Servers
    let response = db.all()
    let data = response.sort((b, a) => a.data - b.data).slice(0, 9);

let embed = new MessageEmbed()
.setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
.setColor(EmbedColour)
.setTimestamp()
.addField(`ARK | Platform Information`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
.addField("\tXBOX Live Bans:", "```\n" +XBOXBans+"```",true)
.addField("\tPlayStation Bans:", "```\n" +PS4Bans+"```",true)
.addField("\tSteam/Epic Bans:", "```\n" +PCBans+"```",true)
.addField("\u200b","\u200b ")
.addField("Top 3 Searched Servers:","\u200b ",true)
.addField("\u200b","\u200b",true)
data.forEach(u => {
    embed.addField(`${u.ID}`,`**Searched:** ${u.data} Times`,true);
 })

return interaction.followUp({ embeds: [embed] })      
}
}