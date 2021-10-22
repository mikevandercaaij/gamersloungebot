const ms = require('ms');

module.exports = {
    name: 'unmute',
    description: "This command will unmute a member.",
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        if(message.member.permissions.has("ADMINISTRATOR") || message.member.roles.cache.has('883025449280753714')) {
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Members');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);

            } else {
                message.channel.send('Can\'t find that member.');
            }
        } else {
            message.channel.send('You\'re not allowed to use this command.');
        }
    }
}