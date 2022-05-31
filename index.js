const Discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
const TOKEN = process.env.TOKEN;
const CLIENT_IDENTIFIER = process.env.CLIENT_ID;

const LOAD_SLASH = process.argv[2] == "load";

const CLIENT_ID = CLIENT_IDENTIFIER;

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    partials: ["GUILD_MEMBER"],
});

client.slashcommands = new Discord.Collection();

let commands = [];

const slashFiles = fs
    .readdirSync("./slash")
    .filter((file) => file.endsWith(".js"));
for (const file of slashFiles) {
    const slashcmd = require(`./slash/${file}`);
    client.slashcommands.set(slashcmd.data.name, slashcmd);
    if (LOAD_SLASH) commands.push(slashcmd.data.toJSON());
}

const eventFiles = fs
    .readdirSync("./events")
    .filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);

    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, commands));
    } else {
        client.on(event.name, (...args) => event.execute(...args, commands));
    }
}

if (LOAD_SLASH) {
    const rest = new REST({ version: "9" }).setToken(TOKEN);
    console.log("Deploying slash commands");
    rest.put(Routes.applicationCommands(CLIENT_ID), {
        body: commands,
    })
        .then(() => {
            console.log("Successfully loaded");
            process.exit(0);
        })
        .catch((err) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
        });
} else {
    client.login(TOKEN);
}
