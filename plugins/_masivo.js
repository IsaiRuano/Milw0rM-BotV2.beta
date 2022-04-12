let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/masivo.mp3'
conn.sendFile(m.chat, vn, 'masivo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Masivo|masivo|mamamasivo|MASIVO/i
handler.command = new RegExp

module.exports = handler