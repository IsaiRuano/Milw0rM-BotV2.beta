let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*๐พ๐ง๐๐๐๐ค๐ง ๐๐๐๐๐๐๐ก ๐ฟ๐๐ก ๐ฝ๐ค๐ฉ ๐ฝ๐ง๐ช๐ฃ๐ค ๐๐ค๐๐ง๐๐ฃ๐ค ๐๐ก ๐๐จ๐ค ๐๐ค๐๐ค*

*_โค ๐๐ถ๐ฎ๐ฆ๐ณ๐ฐ ๐๐ฆ ๐๐ณ๐ถ๐ฏ๐ฐ ๐๐ฐ๐ฃ๐ณ๐ช๐ฏ๐ฐ_*

*_โค* *Wa.me/17722386341* *(No Bot)*

`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*๐ฅ ๐ญ๐๐๐๐ ๐พ๐๐๐๐๐๐แถสณแตแตแตแตสณ๐ฅ*', 'status@broadcast')
}

handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(DueรฑoDelBot|dueรฑodelbot|ownerreal)$/i

module.exports = handler
