module.exports = {
    name: 'sad',
    description: "rickroll",
    execute(client, message, args, Discord) {
        message.channel.send('https://tenor.com/view/rick-roll-rick-ashley-never-gonna-give-you-up-gif-22113173');
    }
}