// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'fox',
    description: 'Random picture of a fox',
    execute(client, message, args, Discord) {

        animals.fox()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const foxEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Fox')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [foxEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}