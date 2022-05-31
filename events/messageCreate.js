module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.embeds.length > 0) {
            console.log("Embed Detected.");
            const msge = message.embeds[0];
            const embTitle = msge.title;
            var counter;
            var i;
            if (message.channel.id == "976280835961536573") {
                if (msge.title !== null) {
                    if (message.author.id === "956583560263917638") {
                        if (msgeDescription !== null) {
                            var msgeDescription = msge.description;
                            var descArray = msgeDescription.split("\n");
                            const splitTitle = embTitle.substring(0, 10);
                            if (splitTitle === "SOL Mints ") {
                                console.log("Embed Confirmed.");
                                message.react("❌");
                                for (i = 2; i < descArray.length; ) {
                                    const currentField = descArray[i];
                                    const emojiName = currentField.substring(
                                        0,
                                        2
                                    );
                                    message.react(emojiName);
                                    console.log(
                                        "Reaction - ",
                                        emojiName,
                                        " - has been added."
                                    );
                                    i++;
                                    i++;
                                    i++;
                                }
                            }
                        }
                    }
                }
            }
        }
    },
};
