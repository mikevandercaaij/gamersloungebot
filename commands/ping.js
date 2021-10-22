module.exports = {
    name: 'ping',
    description: "This is a ping command!",
    execute(client, message, args, Discord) {

        //only works if user has certain role
        
            message.channel.send('pong!');
        
        //add role
            // message.member.roles.add('900795975109574678').catch(console.error);
        //remove role
            // message.member.roles.remove('900795975109574678').catch(console.error);

        //see if user has permissions by using flags
        // if(message.member.permissions.has("KICK_MEMBERS")){
        //     message.channel.send('You have the permission to kick members.')
        // }
        

        
    }
}