// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'lizard',
    description: 'Random picture of a lizard',
    execute(client, message, args, Discord) {

        animals.lizard()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const lizardEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Lizard')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [lizardEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}