module.exports = {
    name: 'ban',
    description: 'This command will ban a member!',
    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();
        if(member && message.member.permissions.has("BAN_MEMBERS")){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('User has been banned');
        } else {
            message.channel.send('You can\'t ban that member.');
        }
    }
}