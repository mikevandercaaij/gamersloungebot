// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'dog',
    description: 'Random picture of a dog',
    execute(client, message, args, Discord) {

        animals.dog()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const dogEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Dog')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [dogEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}