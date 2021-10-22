module.exports = {
    name: 'help',
    description: "Bot explanation",
    execute(client, message, args, Discord) {
        let member = message.author.tag;

        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setAuthor(`Help/Command List`, 'https://mikevandercaaij.nl/img/glIcon.png')
        .setDescription(' \n‎‎‏‏‎Don\'t forget to use "-" in front of the following commands.\n‎‎‏‏‎ ‎')
        .addFields(
            {name: ':shield: Moderation', value: '``kick`` ``ban`` ``mute`` ``unmute`` ``clear``'},
            {name: ':partying_face: Fun', value: '``sad`` ``image``'},
            {name: ':wrench: Utility', value: '``help`` ``rules`` ``avatar``'}
            
        )
        
        .setTimestamp()
        .setFooter(`Requested by ${member}`);

        message.channel.send({ embeds: [helpEmbed] });
    }
}
