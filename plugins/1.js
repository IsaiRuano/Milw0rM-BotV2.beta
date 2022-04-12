let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers Y Milw0rM - Bot*

*_➤ Grupos oficiales del Bot:_*

*_1.-_* *https://chat.whatsapp.com/CDqIKwhghP79a28A3pay8a*

*_➤ POR EL MOMENTO SOLO ABRA 1 GRUPO_*

*_➤ Grupo The Shadow Brokers:_*

*_5.-_* *https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb*

`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 MILW0RM - BOT V3🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler