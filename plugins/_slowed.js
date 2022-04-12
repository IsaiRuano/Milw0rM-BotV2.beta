let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/slowed.mp3'
conn.sendFile(m.chat, vn, 'slowed.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /MusicaGOD|músicagod|Música GOD|música god/
handler.command = new RegExp
module.exports = handler