const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("Tests the bot."),
    run: async ({ client, interaction }) => {
        if (!interaction.inGuild()) return;
        return await interaction.editReply("Test complete.");
    },
};
