const Anime_Images = require('anime-images-api')
const API = new Anime_Images()

module.exports = {
    name: 'hug',
    description: 'Roleplay hug another member',
    execute(client, message, args, Discord) {

        if(!message.mentions.members.first()) return message.reply("Please mention a member!");

        async function getIMG(){
            let { image } = await API.sfw.hug()
            const authorVar = message.author;
            const mentionedPerson = message.mentions.members.first().id;
            const user = await client.users.fetch(mentionedPerson, { cache: true });
            const usernameMention = user.username;


            // console.log(image)

            const hugEmbed = new Discord.MessageEmbed()
            .setColor('#BF63DC')
            .setAuthor(`${message.author.username} hugs ${usernameMention}`, `https://cdn.discordapp.com/avatars/${authorVar.id}/${authorVar.avatar}.png`)
            // .setDescription(`${user.username}`)
            .setImage(`${image}`)
            .setTimestamp()

            message.channel.send({ embeds: [hugEmbed] });
            // message.delete();

        }
        getIMG()

    }
}