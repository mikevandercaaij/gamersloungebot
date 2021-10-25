const axios = require('axios');
const { MessageFlags } = require('discord.js');

module.exports = {
    name: 'meme',
    description: 'Random meme',
    execute(client, message, args, Discord) {



        axios.get('https://meme-api.herokuapp.com/gimme')
        .then((res) => {
        //  console.log('Res:', res.data.url)
        message.channel.send(res.data.url)
        message.delete();
        })
        .catch((err) => {
            console.log(err);
        })
    }
}