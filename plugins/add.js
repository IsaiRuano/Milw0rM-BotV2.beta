let fetch = require('node-fetch')
let handler = async (m, { conn, text, participants, usedPrefix }) => {
  let users = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  conn.groupAdd(m.chat, users)

	if(isNaN(text) && !text.match(/@/g)){}
  else if(isNaN(text)) {
		var number = text.split`@`[1]}
  else if(!isNaN(text)) {
		var number = text}
	if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] Agregue un número*\n\n*┯┷*\n*┠≽Ejemplo:*\n*┠*\n*┠≽ ${usedPrefix}añadir 5219996xxxxxx*\n*┷┯*`, m)
	if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠ ️] Número erróneo, ingrese un número correcto!*\n\n*Ejemplo de número: 48729750700*`, m)

  try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
	let response = await conn.groupAdd(m.chat, users)
	let pp = await conn.getProfilePicture(m.chat).catch(_ => false)
	let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
	for (let user of response.participants.filter(user => Object.values(user)[0].code == 403)) {
	  let [[jid, {
		invite_code,
		invite_code_exp
	  }]] = Object.entries(user)
	  let teks = `*[❗] El número no puede ser agregado, puede deberse a que salio del grupo recientemente o que tenga puesto en privacidad que solo sus contactos lo puedan agregar*\n\n_Enviando invitación a @${jid.split('@')[0]}..._`
	  m.reply(teks, null, {
		contextInfo: {
		  mentionedJid: conn.parseMention(teks)
		}
	  })
	  await conn.sendGroupV4Invite(m.chat, jid, invite_code, invite_code_exp, false, '_Hola 👋🏻, soy un The Shadow Brokers - Bot, un Bot de WhatsApp, un integrante de este grupo intento agregarte, pero no pudo :( es por ello que se te envia esta invitación para que puedas agregarte tu mism@._ *Únete, te esperamos!!*', jpegThumbnail ? {
		jpegThumbnail
	  } : {})
	}
} catch (e) {
		} finally {
			conn.groupAdd(m.chat, [user]).catch(console.log)
	}	
}
handler.help = ['add', '+'].map(v => v + ' _número_')
handler.tags = ['group']
handler.command = /^(add|\+|añadir)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler