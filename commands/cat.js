const axios = require('axios');

module.exports = {
    name: 'cat',
    description: 'Random picture of a cat',
    execute(client, message, args, Discord) {

        axios.get('https://api.thecatapi.com/v1/images/search?format=json')
        .then((res) => {
        //  console.log('Res:', res.data[0].url)
        message.channel.send(res.data[0].url)
        message.delete();
        })
        .catch((err) => {
            console.log(err);
        })
    }
}