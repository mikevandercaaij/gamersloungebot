module.exports = {
    name: 'kick',
    description: 'This command will kick a member!',
    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();
        if(member && message.member.permissions.has("KICK_MEMBERS")){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`${member} has been kicked.`);
        } else {
            message.channel.send('You don\'t have the permission to kick members.');
        }
    }
}