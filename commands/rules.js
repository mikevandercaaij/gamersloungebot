module.exports = {
    name: 'rules',
    description: "Gamers Lounge rules",
    execute(client, message, args, Discord) {
        const rulesEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle('Gamers Lounge Rules')
        .setDescription('Please follow our rules :)')
        .setThumbnail('https://mikevandercaaij.nl/img/glAnime.gif')
        .addFields(
            {name: 'Rule 1a', value: 'Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated. This Includes indirect threats, as well as sharing or threatening to share someone\'s private personal information (also known as doxxing).'},
            {name: 'Rule 1b', value: 'This is a community driven Server and we welcome all manner of expression. But remember that you\'re sharing the space with others, while you\'re free to use the voice chat channels as you see fit try not to hog them. If you need more just ask!'},
            {name: 'Rule 2', value: 'No NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content.'},
            {name: 'Rule 3', value: 'If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space!'}
        )
        .setImage('https://mikevandercaaij.nl/img/glBanner.png')
        .setTimestamp()
        .setFooter('Make sure to check out the #rules channel', 'https://mikevandercaaij.nl/img/glIcon.png');

        message.channel.send({ embeds: [rulesEmbed] });
    }
}