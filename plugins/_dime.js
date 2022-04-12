let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/dime.mp3'
conn.sendFile(m.chat, vn, 'dime.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Dime|dime|contexto|Contexto?|callate|Callate/i
handler.command = new RegExp

module.exports = handler