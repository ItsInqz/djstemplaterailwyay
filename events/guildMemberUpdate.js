const Discord = require("discord.js");
module.exports = {
    name: "guildMemberUpdate",
    async execute(oldMember, newMember) {
        async function StripRoles() {
            const astralHolder = "951355334948184074";
            const astralHunter = "976092073709170738";
            if (oldMember.roles.cache.has(astralHolder)) {
                if (!newMember.roles.cache.has(astralHolder)) {
                    if (newMember.roles.cache.has(astralHunter)) {
                        newMember.roles.remove(astralHunter);
                    }
                }
            }
            if (newMember.roles.cache.has(astralHunter)) {
                if (!newMember.roles.cache.has(astralHolder)) {
                    newMember.roles.remove(astralHunter);
                }
            }
        }
        StripRoles();
    },
};
