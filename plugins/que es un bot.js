let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Bot.jpeg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*â::ÂŋđđŽđĖ đđŦ đŽđ§ đđ¨đ­ đđ đđĄđđ­đŦđđŠđŠ?::â*

- đđ§ đđ¨đ­ đđŦ đŽđ§đ đĸđ§đ­đđĨđĸđ đđ§đđĸđ đđĢđ­đĸđđĸđđĸđđĨ đĒđŽđ đĢđđđĨđĸđŗđ đ­đđĢđđđŦ đĒđŽđ đĨđ đĸđ§đđĸđĒđŽđ đđ¨đ§ đđ¨đĻđđ§đđ¨đŦ, đđ§ đđĨ đđđŦđ¨ đđ đđĄđđ­đŦđđŠđŠ đŠđŽđđđđŦ đđĢđđđĢ đŦđ­đĸđđ¤đđĢđŦ, đđđŦđđđĢđ đđĢ đĻđŽĖđŦđĸđđ, đ¯đĸđđđ¨đŦ, đđĢđđđĢ đĨđ¨đ đ¨đŦ đŠđđĢđŦđ¨đ§đđĨđĸđŗđđđ¨đŦ đ˛ đĻđŽđđĄđ¨ đĻđđŦ, đđŦđ­đ¨ đđ đđ¨đĢđĻđ đđŽđ­đ¨đĻđđ­đĸđŗđđđ, đ¨ đŦđđ đĒđŽđ đŽđ§ đĄđŽđĻđđ§đ¨ đ§đ¨ đĸđ§đ­đđĢđđĸđđĢđ đđ§ đđĨ đŠđĢđ¨đđđŦđ¨ 

- đđđĢđ đ¯đđĢ đđĨ đĻđđ§đŽĖ đđ đđ¨đĻđđ§đđ¨đŦ đŠđŽđđđđŦ đŽđŦđđĢ #menu

*_ã Milw0rM - BOT ã_*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpeg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.customPrefix = /ÂŋQuÃŠ es un Bot?|ÂŋquÃŠ es un Bot?|quÃŠ es un Bot|que es un Bot|QuÃŠ es un Bot?|Que es un Bot?/i
handler.command = new RegExp

handler.fail = null

module.exports = handler