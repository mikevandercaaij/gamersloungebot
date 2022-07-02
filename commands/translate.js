const translate = require('@iamtraction/google-translate');

module.exports = {
    name: 'translate',
    description: 'Translate text to desired language',
    async execute(client, message, args, Discord) {
        const query = args.join(" ");
        if(!query) return message.reply("Please specify the text you want translated.");

        const translated = await translate(query, {to: 'en'});
        message.channel.send(translated.text);
    }
}