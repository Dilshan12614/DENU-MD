const config = require('../config')
const { cmd } = require('../command')
const { runtime } = require('../lib/functions')

cmd({
    pattern: "alive",
    react: "🟢",
    desc: "Check bot online status",
    category: "main",
    filename: __filename
},
async (conn, mek, m, {
    from,
    pushname,
    reply
}) => {
    try {

        let aliveMessage = `🟢 *ALIVE NOW* 🟢

👋 HELLOW... *${pushname || 'User'}* ❤️ I am ALIVE NOW CYBER X THENULA

✅ *CYBER THENULA X MD IS ONLINE* ✅

╭┈───────────────•
│ ◦ 🕒 *Runtime* : ${runtime(process.uptime())}
│ ◦ ⚡ *Mode* : *[${config.MODE}]*
│ ◦ ⚙️ *Prefix* : *[${config.PREFIX}]*
│ ◦ 🤖 *Name Bot* : *THENUWA X MD*
│ ◦ 👤 *Creator* : *Thenula/Dilshan*
│ ◦ 📌 *Version* : *ᴠ.2.0.0*
╰┈───────────────•

> © ⚡ *POWERED BY CYBER THENUWA*`;

        await conn.sendMessage(
            from,
            {
                image: {
                    url: 'https://n.uguu.se/dQyDlWXO.jpeg'
                },
                caption: aliveMessage,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363403804248705@newsletter',
                        newsletterName: 'THENUWA XMD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log('[ALIVE ERROR]', e);
        reply(`${e}`);
    }
});
