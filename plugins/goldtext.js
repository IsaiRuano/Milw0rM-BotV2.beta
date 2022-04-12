let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Ingrese un texto'
  m.reply('*[❗]Aguarde un momento, estoy realizando su diseño...*\n\n_Si el bot no manda la imagen o la manda en formato de archivo, intentarlo nuevamente pero con menos texto_\n\n_©The Shadow Brokers - Bot_')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/gold-text?q=${response}&apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'gold-text.jpg', `Nih Kak`, m, false)
}
handler.help = ['goldtext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(goldtext)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler


