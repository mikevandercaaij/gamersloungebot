module.exports = {
    name: 'botinfo',
    description: "Information server",
    execute(client, message, args, Discord) {
        const rules = '883054721911373864';
        const games = '883054576788463688';

        if(message.member.permissions.has("ADMINISTRATOR")){
            const welcomeEmbed = new Discord.MessageEmbed()
            .setColor('#BF63DC')
            .setTitle('<:z_ribbon:903736313675677757>     Welcome to Gamers Lounge     <:z_ribbon:903736313675677757>')
            .setDescription(`We offer a platform for every game. Here you can create your own temporary channel, chat about existing or upcoming games or just find new friends to talk or play with.\n\nMake sure to read the ${message.guild.channels.cache.get(rules).toString()} and remember to select your region, platform, and preferred games in ${message.guild.channels.cache.get(games).toString()}!\n\nfor more information what we offer you, just join the discord and feel free to look around\n\nWe hope you'll enjoy your stay!\n\n/Management`)
            .setImage('https://share.creavite.co/y5YCsoo4m3J2qyw6.gif')
    
            const partyBeastEmbed = new Discord.MessageEmbed()
            .setColor('#BF63DC')
            .setTitle('<:z_ribbon:903736313675677757>     Voice Channel Guide     <:z_ribbon:903736313675677757>')
            .setDescription(`*Click on any voice channel named "Create Voice Channel". Afterwards go to* ${message.guild.channels.cache.get('883077758668902571').toString()} *and use the following commands:*`)
            .addFields(
                {name: '!pbRename <desired name>', value: 'Change the name of your Voice Channel.'},
                {name: '!pbLock', value: 'Make it so no one else can join your Voice Channel.'},
                {name: '!pbUnlock', value: 'Open your Voice Channel again (so your friends can join).'},
                {name: '!pbKick <@someone>', value: 'Kick the person from your Voice Channel.'},
                {name: '!pbInvite <@someone>', value: 'Invite the desired Gamer to join your Voice Channel.'},
                {name: '!pbOwner', value: 'See who is the current owner of the Voice Channel.'},
            )
            .setImage('https://i.imgur.com/PF53ovF.png')
         
    
                
    
            message.channel.send({ embeds: [welcomeEmbed] });
            message.channel.send({ embeds: [partyBeastEmbed] });

        } else {
            message.channel.send('You don\'t have the permission to use this command.');
        }

    }
}