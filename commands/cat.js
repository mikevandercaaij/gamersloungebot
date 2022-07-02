// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'cat',
    description: 'Random picture of a cat',
    execute(client, message, args, Discord) {

        animals.cat()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const catEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Cat')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [catEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}