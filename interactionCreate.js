module.exports = {
	name: "interactionCreate",
	async execute(interaction) {
		async function handleCommand() {
			if (!interaction.isCommand()) return;
			const client = interaction.client;
			const slashcmd = client.slashcommands.get(interaction.commandName);
			if (!slashcmd) interaction.reply("Not a valid slash command");

			await interaction.deferReply();
			await slashcmd.run({ client, interaction });
		}
		handleCommand();
	},
};
