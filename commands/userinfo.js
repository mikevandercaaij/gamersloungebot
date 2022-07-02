module.exports = {
    name: 'userinfo',
    description: "All user's information",
    execute(client, message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user;

        const infoEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle(`${user.username}'s Information`)
        .setDescription(`Info from ${message.guild.name}`)
        .setThumbnail(user.avatarURL({dynamic: true}))
        .setFooter(`requested by ${message.author.tag}`)
        .setTimestamp()
        .addFields(
            { 
                name: "User Info",
                value: "```Username:"+user.username+"\nDiscriminator: #"+user.discriminator+"\nTag: "+user.tag+"\nServer Nickname: "+user.displayName+"\nIs Bot: "+user.bot+"\nID: "+user.id+" ```",
                inline: true
            },
            {
                name: `Member Info`,
                value: "```Joined Server: "+new Date(user.joinedAt).toLocaleDateString()+"\nJoined Discord: "+new Date(user.createdTimestamp).toLocaleDateString()+"```",
                inline: true
            }
          
      
        )


        message.channel.send({ embeds: [infoEmbed] });
    }
}