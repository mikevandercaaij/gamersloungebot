const { Client, Intents, Collection, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
require('dotenv').config();
const client = new Client({
    presence: {
        status: 'online',
        afk: 'false',
        activities: [{
            name: '-help',
            type: 'LISTENING'
        }],
    },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES
    ]
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(process.env.token);


//pm2 start index.js\ "bot" --watch
//pm2 delete all
//pm2 ls
//pm2 logs
//pm2 resurrect
