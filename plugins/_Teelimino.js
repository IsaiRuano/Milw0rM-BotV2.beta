let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/teelimino.mp3'
conn.sendFile(m.chat, vn, 'teelimino.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Te elimino|teeliminó|te eliminó/i
handler.command = new RegExp

module.exports = handler