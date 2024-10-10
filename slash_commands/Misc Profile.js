const { JsonDatabase } = require("wio.db");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const uudb = new JsonDatabase({ databasePath:"./Database/CommandsUsedLeaderboard.json" });
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
    name:"profile",
    data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Shows your profile."),

run: async (client, interaction) => {

    let currentuserused = uudb.get(interaction.user.id);
    var newcurrentuserused = currentuserused + 1;
    uudb.set(interaction.user.id, newcurrentuserused);

        let username = interaction.member.user;
        let ID = interaction.user.id;
        let Avatar = interaction.member.user.avatar;
        let DisplayPicture = `https://cdn.discordapp.com/avatars/${ID}/${Avatar}`

                 const embed = new MessageEmbed()  
                 .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
                 .setThumbnail(DisplayPicture)
                 .setDescription("*Your Master Controller Profile.*")
                 .setColor(EmbedColour)
                 .setTimestamp()
                 .addField(`\tUsername:`, `${username}`)
                 .addField(`\tDiscordID:`, `${ID}`)
                 .addField("\tCommands Used:",  `${currentuserused}`)
                 return interaction.followUp({ embeds: [embed] })
            }
        }