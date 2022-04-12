/**
 * Dibuat oleh : Muhammad Restu
 * ©Muhammad Restu 2021
 */

/**
 * "Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
 * Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
 * (QS ash-Shaff: 2-3).
 */


let handler = (m, { conn, usedPrefix, command, text }) => {
  conn.tembak = conn.tembak || { musuh: [], tembak: [] }
   if(/kiri/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    let kiri = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(conn.tembak.tembak.indexOf("🤠") == 0) {
      conn.tembak.tembak = kiri[0]
    } else if(conn.tembak.tembak.indexOf("🤠") == 1) {
      conn.tembak.tembak = kiri[0]
    } else if(conn.tembak.tembak.indexOf("🤠") == 2) {
      conn.tembak.tembak = kiri[1]
    } else if(conn.tembak.tembak.indexOf("🤠") == 3) {
      conn.tembak.tembak = kiri[2]
    } else if(conn.tembak.tembak.indexOf("🤠") == 4) {
      conn.tembak.tembak = kiri[3]
    }

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    conn.deleteMessage(chat, { fromMe, id, remoteJid: chat })

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, "©The Shadow Brokers - Bot", "Disparo", `${usedPrefix}${command} tembak`)
    return conn.send2Button(m.chat, pos, "©The Shadow Brokers - Bot", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  } else if(/kanan/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    let kanan = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(conn.tembak.tembak.indexOf("🤠") == 0) {
      conn.tembak.tembak = kanan[1]
    } else if(conn.tembak.tembak.indexOf("🤠") == 1) {
      conn.tembak.tembak = kanan[2]
    } else if(conn.tembak.tembak.indexOf("🤠") == 2) {
      conn.tembak.tembak = kanan[3]
    } else if(conn.tembak.tembak.indexOf("🤠") == 3) {
      conn.tembak.tembak = kanan[4]
    } else if(conn.tembak.tembak.indexOf("🤠") == 4) {
      conn.tembak.tembak = kanan[4]
    }

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    conn.deleteMessage(chat, { fromMe, id, remoteJid: chat })

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, "©The Shadow Brokers - Bot", "Disparo", `${usedPrefix}${command} tembak`)
    return conn.send2Button(m.chat, pos, "©The Shadow Brokers - Bot", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  } else if(/tembak/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    if(conn.tembak.tembak.indexOf("🤠") == conn.tembak.musuh.indexOf("🥷")) {
      conn.tembak = {}
      global.DATABASE.data.users[m.sender].money += 120830
      m.reply("*_Tu ganas!!!_*\n\n*_Obtienes = + $120830 de dinero 💵_*\n\n*_Puedes checar tu balance con el comando #billetera y checar en que posición estas en el top de dinero con #lb_*\n\n*_¿Quieres seguir jugando? usa el comando #disparaalninja_*\n\n_©The Shadow Brokers - Bot_")
    }
    conn.deleteMessage(chat, { fromMe, id, remoteJid: chat })
  } else {
    randMusuh = [
      ["🥷", "-", "-", "-", "-"],
      ["-", "🥷", "-", "-", "-"],
      ["-", "-", "🥷", "-", "-"],
      ["-", "-", "-", "🥷", "-"],
      ["-", "-", "-", "-", "🥷"]
    ]
    randAku = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    musuh = random(randMusuh)
    aku = random(randAku)

    conn.tembak.musuh = musuh
    conn.tembak.tembak = aku

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, "©The Shadow Brokers - Bot", "Disparo", `${usedPrefix}${command} tembak`)
    return conn.send2Button(m.chat, pos, "©The Shadow Brokers - Bot", "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`)
  }
}

handler.command = /^(disparaalninja)/i
handler.private = true 

module.exports = handler


function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)] }