const { MessageEmbed } = require('discord.js');

module.exports = (Discord, client, guildMember) => {
    // const guildMember = Discord.GuildMember;

    //welcome message
    const desiredChannel = "912809953859883009"; //channel where welcome message will be shown
    const information = '903696634892927016'; // info channel
    const roles = '883054576788463688'; // role channel
    const rules = '883054721911373864'; // rules channel

    const welcomeEmbed = new MessageEmbed()
        .setTitle(`Welcome to Gamers Lounge!`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/${guildMember.user.id}/${guildMember.user.avatar}.png`)
        .setDescription(`We offer a platform for every Gamer. Here you can create your own temporary channel, chat about existing or upcoming games or just find new friends to talk or play with.`)
        .addFields(
            {
                name: ':scroll: Please check out the following channels:', value: `${guildMember.guild.channels.cache.get(rules).toString()} Check out our server rules!
            ${guildMember.guild.channels.cache.get(information).toString()} Get to know the server!
            ${guildMember.guild.channels.cache.get(roles).toString()} Set roles here!`
            }
        )
        .setColor('#BF63DC')
        .setImage('https://share.creavite.co/y5YCsoo4m3J2qyw6.gif')
        .setTimestamp();

    const channel = client.channels.cache.get(desiredChannel)
    channel.send(`Hey <@${guildMember.user.id}>`)
    channel.send({ embeds: [welcomeEmbed] });

    //end welcome message

}