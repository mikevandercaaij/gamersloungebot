module.exports = {
    name: 'help',
    description: "Bot explanation",
    execute(client, message, args, Discord) {
        let member = message.author.tag;

        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setTitle(`<:z_ribbon:903736313675677757>     Help/Command List     <:z_ribbon:903736313675677757>`)
        .setDescription(' \nDon\'t forget to use the prefix "-", while using the following commands.\n‎‎‏‏‎ ‎')
        .addFields(
            {name: ':hugging: Roleplay', value: '``hug`` ``kiss`` ``slap`` ``punch`` ``wink`` ``pat`` ``kill`` ``cuddle``'},
            {name: ':partying_face: Fun', value: '``meme`` ``sad`` ``image``'},
            {name: ':teddy_bear: Animals', value: '``dog`` ``cat`` ``bunny`` ``duck`` ``fox`` ``lizard`` ``shiba`` ``koala`` ``panda``'},
            {name: ':tv: Anime/Manga', value: '``anime``'},
            {name: ':wrench: Utility', value: '``help`` ``rules`` ``avatar`` ``userinfo`` ``translate``'},
            {name: ':shield: Moderation', value: '``mute`` ``unmute`` ``clear``'}
            
        )
        
        .setTimestamp()
        .setFooter(`Requested by ${member}`);

        message.channel.send({ embeds: [helpEmbed] });
    }
}
