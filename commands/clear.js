module.exports = {
    name: 'clear',
    description: "Clear certain amount of messages",
    async execute(client, message, args, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR") || message.member.roles.cache.has('883025449280753714')) {
            if(!args[0]) return message.reply("Please enter the amount of messages you want to remove!");

            if(isNaN(args[0])) return message.reply("Please enter a real number!");

            if (args[0] > 100) return message.reply("You cannot delete more than 100 messages at once.");

            if (args[0] < 1) return message.reply("You must delete atleast 1 message.");

            const deleteValue = parseInt(args[0]) + 1;

            await message.channel.messages.fetch({limit: deleteValue}).then(messages => {
                message.channel.bulkDelete((messages));
                // console.log(deleteValue)
            });
            
            } else {
                message.channel.send('You\'re not allowed to use this command.');
            }
    }
}