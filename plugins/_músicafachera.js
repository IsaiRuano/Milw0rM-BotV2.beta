let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/músicafachera.mp3'
conn.sendFile(m.chat, vn, 'músicafachera.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /MusicaFachera|músicafachera/
handler.command = new RegExp
module.exports = handler