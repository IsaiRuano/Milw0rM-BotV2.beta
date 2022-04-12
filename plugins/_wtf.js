let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/wtf.mp3'
conn.sendFile(m.chat, vn, 'wtf.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Wtf|wtf|wtfack/i
handler.command = new RegExp

module.exports = handler