let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Milw0rM - Bot*

*_➤ Grupos oficiales del Bot:_*
*_1.-_* *https://chat.whatsapp.com/CDqIKwhghP79a28A3pay8a*

*_➤ Por El Momento Abra 1 Grupo asta que se llene_*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 MILWORM - BOT 🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
