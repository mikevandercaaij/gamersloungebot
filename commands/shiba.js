// const axios = require('axios');
const animals = require('random-animals-api');

module.exports = {
    name: 'shiba',
    description: 'Random picture of a shiba',
    execute(client, message, args, Discord) {

        animals.shiba()
        .then((res) => {
        //  console.log(res);

        let member = message.author.tag;

        const shibaEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Random picture of a Shiba')
        .setImage(`${res}`)
        .setTimestamp()
        .setFooter(`Requested by ${member}`, 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [shibaEmbed] });
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}