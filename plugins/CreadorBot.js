let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝘿𝙚𝙡 𝘽𝙤𝙩 𝘽𝙧𝙪𝙣𝙤 𝙎𝙤𝙗𝙧𝙞𝙣𝙤 𝙀𝙡 𝙄𝙨𝙤 𝙏𝙤𝙙𝙤*

*_➤ 𝘕𝘶𝘮𝘦𝘳𝘰 𝘋𝘦 𝘉𝘳𝘶𝘯𝘰 𝘚𝘰𝘣𝘳𝘪𝘯𝘰_*

*_➤* *Wa.me/17722386341* *(No Bot)*

`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 𝕭𝖗𝖚𝖓𝖔 𝕾𝖔𝖇𝖗𝖎𝖓𝖔ᶜʳᵉᵃᵈᵒʳ🔥*', 'status@broadcast')
}

handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(DueñoDelBot|dueñodelbot|ownerreal)$/i

module.exports = handler