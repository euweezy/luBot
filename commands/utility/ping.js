const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        // Check if the interaction has already been replied to
        if (interaction.deferred || interaction.replied) {
            await interaction.editReply('Pong!');
        } else {
            await interaction.reply('Pong!');
        }
    },
};