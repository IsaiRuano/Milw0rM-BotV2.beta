let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/milworbot.mp3'
conn.sendFile(m.chat, vn, 'milworbot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /audio del bot|Audio del bot|audiodelbot|Audiodelbot/i
handler.command = new RegExp

module.exports = handler