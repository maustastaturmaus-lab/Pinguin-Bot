const { Client, GatewayIntentBits } = require('discord.js');
// Wir laden die Umgebungsvariablen für den Token
require('dotenv').config(); 

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`🐧 Pinguin.gg ist online als ${client.user.tag}!`);
});

// Ein einfacher Test-Befehl
client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === '!ping') {
        message.reply('Pong! 🏓 Pinguin.gg ist bereit!');
    }
});

client.login(process.env.DISCORD_TOKEN);
