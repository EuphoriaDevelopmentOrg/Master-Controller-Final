const data = [

  {
    name: "Fiber",
    hexagons: 12,
    quantity: 50,
  },

  {
    name: "Thatch",
    hexagons: 20,
    quantity: 50,
  },
  {
    name: "Wood",
    hexagons: 25,
    quantity: 50,
  },
  {
    name: "Hide",
    hexagons: 60,
    quantity: 50,
  },
  {
    name: "Flint",
    hexagons: 18,
    quantity: 50,
  },
  {
    name: "Stone",
    hexagons: 40,
    quantity: 50,
  },
  {
    name: "Keratin",
    hexagons: 60,
    quantity: 25,
  },
  {
    name: "Chitin",
    hexagons: 60,
    quantity: 25,
  },
  {
    name: "Metal",
    hexagons: 150,
    quantity: 10,
  },
  {
    name: "Crystal",
    hexagons: 115,
    quantity: 10,
  },
  {
    name: "Obsidian",
    hexagons: 180,
    quantity: 5,
  },
  {
    name: "Oil",
    hexagons: 120,
    quantity: 20,
  },
  {
    name: "Pelt",
    hexagons: 65,
    quantity: 25,
  },
  {
    name: "Ammonite Blood",
    hexagons: 350,
    quantity: 1,
  },
  {
    name: "Organic Polymer",
    hexagons: 500,
    quantity: 5,
  },  
  {
    name: "Rare Flowers",
    hexagons: 120,
    quantity: 5,
  },  
  {
    name: "Rare Mushrooms",
    hexagons: 120,
    quantity: 5,
  },  
  {
    name: "Sap",
    hexagons: 150,
    quantity: 5,
  },  
  {
    name: "Silica Pearls",
    hexagons: 125,
    quantity: 5,
  },  
  {
    name: "Black Pearl",
    hexagons: 300,
    quantity: 1,
  },  
  {
    name: "Amarberry",
    hexagons: 10,
    quantity: 50,
  },  
  {
    name: "Azulberry",
    hexagons: 10,
    quantity: 50,
  },  
  {
    name: "Tintoberry",
    hexagons: 10,
    quantity: 50,
  },  
  {
    name: "Mejoberry",
    hexagons: 18,
    quantity: 50,
  },  
  {
    name: "Narcoberry",
    hexagons: 80,
    quantity: 20,
  },  
  {
    name: "Stimberry",
    hexagons: 80,
    quantity: 20,
  },  
  {
    name: "Raw Meat",
    hexagons: 25,
    quantity: 20,
  },  
  {
    name: "Green Gem",
    hexagons: 55,
    quantity: 25,
  },  
  {
    name: "Blue Gem",
    hexagons: 95,
    quantity: 20,
  },  
  {
    name: "Red Gem",
    hexagons: 125,
    quantity: 10,
  },  
  {
    name: "Cactus Sap",
    hexagons: 24,
    quantity: 50,
  },  
  {
    name: "Salt",
    hexagons: 65,
    quantity: 50,
  },  
  {
    name: "Sand",
    hexagons: 28,
    quantity: 50,
  },  
  {
    name: "Silk",
    hexagons: 48,
    quantity: 50,
  },
  {
    name: "Sulfur",
    hexagons: 125,
    quantity: 5,
  },
  {
    name: "Clay",
    hexagons: 45,
    quantity: 50,
  },
  {
    name: "Cementing Paste",
    hexagons: 75,
    quantity: 25,
  },
  {
    name: "Charcoal",
    hexagons: 30,
    quantity: 25,
  },
  {
    name: "Gas",
    hexagons: 175,
    quantity: 20,
  },
  {
    name: "Sparkpowder",
    hexagons: 50,
    quantity: 50,
  },
  {
    name: "Gunpowder",
    hexagons: 150,
    quantity: 20,
  },
  {
    name: "Metal Ingot",
    hexagons: 195,
    quantity: 5,
  },
  {
    name: "Electronics",
    hexagons: 700,
    quantity: 5,
  },
  {
    name: "Propellant",
    hexagons: 190,
    quantity: 5,
  },
];

const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { BotIcon, BotName, BotNameLink, EmbedColour } = require('../Database/Information.json');

module.exports = {
  name:"hexagonstore",
  data: new SlashCommandBuilder()
  .setName("hexagonstore")
  .setDescription("Calculate how much of each store item you could buy.")
  .addStringOption(option => option.setName('name').setDescription('Enter Item Name').setRequired(true))
  .addNumberOption(option => option.setName('quantity').setDescription('Enter Quantity')),

run: async (client, interaction) => {

  var itemname = interaction.options.getString('name');
  var amount = interaction.options.getNumber('quantity');
  if(!interaction.options.getNumber('quantity')) {amount = 1};

  for(i=0;i<data.length;i++){
  if(data[i].name.toLowerCase().includes(itemname.toLowerCase())){ 
  
  let hexagonsneeded = data[i].hexagons * amount;
  let recieved = data[i].quantity * amount;
  let amountrecieved = `Purchasing ${recieved}x ${data[i].name} Costs: ${hexagonsneeded} Hexagons`

var icon = `https://cdn.discordapp.com/attachments/813528039106543617/966762420959871026/CraftingSkill.png`

const embed = new MessageEmbed()
      .setAuthor({ name: BotName, iconURL: BotIcon, url: BotNameLink })
      .setDescription(`Calculator | Hexagon Store`)
      .setColor(EmbedColour)
      .setTimestamp()
      .setThumbnail(icon)
      .addField(`ARK | Hexagon Store Calculator`, "Need help? [Support Discord](https://discord.gg/GwJKw7KP9J)")
      .addField("\tName:", `${data[i].name}`)      
      .addField("\tAmount Recieved:", `${amountrecieved}`)               
  return interaction.followUp({ embeds: [embed] }) 
  }
}
}
}