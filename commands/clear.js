module.exports = {
    name: 'clear',
    description: "Clear certain amount of messages",
    async execute(client, message, args, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR") || message.member.roles.cache.has('883025449280753714')) {

            let deleteValue = parseInt(args[0]) + 1;

            if(!args[0]) deleteValue = 2;

            if(args[0] && isNaN(args[0])) return message.reply("Please enter a real number!");

            if (args[0] > 100) return message.reply("You cannot delete more than 100 messages at once.");

            if (args[0] == 100) deleteValue = parseInt(args[0]) - 1;

            if (args[0] < 1) return message.reply("You must delete atleast 1 message.");

            

            await message.channel.messages.fetch({limit: deleteValue}).then(messages => {
                message.channel.bulkDelete((messages));
                // console.log(deleteValue)
            });
            
            } else {
                message.channel.send('You\'re not allowed to use this command.');
            }
    }
}