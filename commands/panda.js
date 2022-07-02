// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'panda',
    description: 'Random picture of a panda',
    execute(client, message, args, Discord) {

        animals.panda()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const pandaEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Panda')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [pandaEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}