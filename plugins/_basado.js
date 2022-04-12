let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/basado.mp3'
conn.sendFile(m.chat, vn, 'basado.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Basado|basado|Cada Dia Mas Basado/i
handler.command = new RegExp

module.exports = handler