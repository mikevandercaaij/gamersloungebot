module.exports = {
    name: 'kick',
    description: 'This command will kick a member!',
    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();
        if(member && message.member.permissions.has("KICK_MEMBERS")){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('User has been kicked');
        } else {
            message.channel.send('You can\'t kick that member.');
        }
    }
}