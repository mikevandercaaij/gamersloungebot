const { get } = require("request-promise-native");

module.exports = {
    name: 'anime',
    description: "Display anime information",
    execute (client, message, args, Discord) {

        if(!args.length) return message.channel.send("Please also provide an Anime.");

        let option = {
            url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
            method: `GET`,
            headers: {
                'Content-Type': "application/vnd.api+json",
                'Accept': "application/vnd.api+json",
            },
            json: true
        }

            get(option).then(mat => {
                // console.log(mat.data[0]);

                let member = message.author.tag;

                if(mat.data[0].attributes.episodeCount === null) {
                    mat.data[0].attributes.episodeCount = "Unknown";
                }

                if (mat.data[0].attributes.showType === 'movie') {
                    mat.data[0].attributes.showType = 'Movie'
                }

                if (mat.data[0].attributes.status === 'finished') {
                    mat.data[0].attributes.status = 'Finished Airing';
                } else if (mat.data[0].attributes.status === 'current') {
                    mat.data[0].attributes.status = 'Currenly Airing';
                }

                avgRating = (mat.data[0].attributes.averageRating / 10).toFixed(2);

                const animeEmbed = new Discord.MessageEmbed()
                .setTitle(mat.data[0].attributes.titles.en_jp)
                .setThumbnail(mat.data[0].attributes.posterImage.original)
                .setDescription(mat.data[0].attributes.synopsis)
                .setColor('#BF63DC')
                .addField(":hourglass: Status", mat.data[0].attributes.status)


                .addField(":tv: Total Episodes", mat.data[0].attributes.episodeCount.toString() ? mat.data[0].attributes.episodeCount.toString(): "N/A", true)
                .addField(":satellite: Aired", `${mat.data[0].attributes.startDate} to ${mat.data[0].attributes.endDate ? mat.data[0].attributes.endDate: "?"}`, true)
                .addField("Type", mat.data[0].attributes.showType, true)
                .addField(":clapper: Next Release", mat.data[0].attributes.nextRelease ? mat.data[0].attributes.nextRelease: "N/A")
                .addField(":star: Rating", avgRating + '/10')
                .addField(":military_medal: Rank", `**Ranked #${mat.data[0].attributes.ratingRank.toString()}**`)

                .setTimestamp()
                .setFooter(`Requested by ${member}`);

                message.channel.send({ embeds: [animeEmbed] });
                message.delete();
            });
    }
}