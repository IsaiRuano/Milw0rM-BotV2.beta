let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/lalechuza.mp3'
conn.sendFile(m.chat, vn, 'lalechuza.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /La lechuza|lalechuza|Lalechuza|La Lechuza/i
handler.command = new RegExp

module.exports = handler