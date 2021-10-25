const axios = require('axios');

module.exports = {
    name: 'dog',
    description: 'Random picture of a dog',
    execute(client, message, args, Discord) {

        axios.get('https://dog.ceo/api/breeds/image/random')
        .then((res) => {
        //  console.log('Res:', res.data.message)
        message.channel.send(res.data.message)
        message.delete();

        })
        .catch((err) => {
            console.log(err);
        })
    }
}