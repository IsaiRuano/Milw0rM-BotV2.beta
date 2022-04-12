let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
┏━━━━━━━━━━━━━┓
┃ *<COMANDOS DE PROPIETARIOS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👑 _${usedPrefix}listgroups_
┣ ඬ⃟👑 _${usedPrefix}boost_
┣ ඬ⃟👑 _${usedPrefix}restart_
┣ ඬ⃟👑 _${usedPrefix}banlist_
┣ ඬ⃟👑 _${usedPrefix}virtext1_
┣ ඬ⃟👑 _${usedPrefix}banchat2_
┣ ඬ⃟👑 _${usedPrefix}actualizar_
┣ ඬ⃟👑 _${usedPrefix}CajaFuerte_
┣ ඬ⃟👑 _${usedPrefix}unbanchat2_
┣ ඬ⃟👑 _${usedPrefix}bc *texto*_
┣ ඬ⃟👑 _${usedPrefix}bcgc *texto*_
┣ ඬ⃟👑 _${usedPrefix}bcbot *texto*_
┣ ඬ⃟👑 _${usedPrefix}setbye *@tag*_
┣ ඬ⃟👑 _${usedPrefix}banuser *@tag*_
┣ ඬ⃟👑 _${usedPrefix}enable *public*_
┣ ඬ⃟👑 _${usedPrefix}disable *public*_
┣ ඬ⃟👑 _${usedPrefix}unbanuser *@tag*_
┣ ඬ⃟👑 _${usedPrefix}listgroup *@tag*_
┣ ඬ⃟👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟👑 _${usedPrefix}setwelcome *@tag*_
┣ ඬ⃟👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟👑 _${usedPrefix}disable *autoread*_
┗━━━━━━━━━━━━━┛`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©Milw0rM - Bot', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(comandosowner|ComandosOwner|comandos owner|ComandosDeOwner|helpOwner|infoOwner|comandosowner|allmenuowner|2helpowner|menu3.2|ayuda3|commandsowner|commandosowne)$/i
handler.fail = null
module.exports = handler
