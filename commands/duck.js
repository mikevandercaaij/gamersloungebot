// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'duck',
    description: 'Random picture of a duck',
    execute(client, message, args, Discord) {

        animals.duck()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const duckEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Duck')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [duckEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}