module.exports = {
    name: 'help',
    description: "Bot explanation",
    execute(client, message, args, Discord) {
        let member = message.author.tag;

        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setAuthor(`Help/Command List`, 'https://mikevandercaaij.nl/img/glIcon.png')
        .setDescription(' \n‎‎‏‏‎Don\'t forget to put "-" in front of the following commands.\n‎‎‏‏‎ ‎')
        .addFields(
            {name: ':shield: Moderation', value: '``kick`` ``ban`` ``mute`` ``unmute`` ``clear``'},
            {name: ':partying_face: Fun', value: '``meme`` ``sad`` ``image`` ``dog`` ``cat``'},
            {name: ':tv: Anime/Manga', value: '``anime``'},
            {name: ':wrench: Utility', value: '``help`` ``rules`` ``avatar``'}
            
        )
        
        .setTimestamp()
        .setFooter(`Requested by ${member}`);

        message.channel.send({ embeds: [helpEmbed] });
    }
}
