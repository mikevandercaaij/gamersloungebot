module.exports = {
    name: 'avatar',
    description: "Display user's avatar",
    execute(client, message, args, Discord) {
        const user = message.mentions.users.first() || message.author;

        const avatarEmbed = new Discord.MessageEmbed()
        .setColor('#BF63DC')
        .setAuthor(`${user.username}'s Avatar`)
        .setImage(
            `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
        );
        message.channel.send({ embeds: [avatarEmbed] });
    }
}