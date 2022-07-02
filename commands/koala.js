// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'koala',
    description: 'Random picture of a koala',
    execute(client, message, args, Discord) {

        animals.koala()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const koalaEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Koala')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [koalaEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}