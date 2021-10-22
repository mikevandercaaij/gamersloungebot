const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "This command will mute a member.",
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        if(message.member.permissions.has("ADMINISTRATOR") || message.member.roles.cache.has('883025449280753714')) {
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Members');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                if(!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function() {
                        memberTarget.roles.add(mainRole.id);
                        memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));

            } else {
                message.channel.send('Can\'t find that member.');
            }
        } else {
            message.channel.send('You\'re not allowed to use this command.');
        }
    }
}