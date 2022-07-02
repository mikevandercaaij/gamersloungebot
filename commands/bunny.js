// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'bunny',
    description: 'Random picture of a bunny',
    execute(client, message, args, Discord) {

        animals.bunny()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const bunnyEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Bunny')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [bunnyEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}