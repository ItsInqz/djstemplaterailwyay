const Discord = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    execute(client, commands) {
        console.log(`Logged in as ${client.user.tag}`);
    },
};
