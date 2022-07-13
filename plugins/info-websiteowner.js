let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *WEBSITE* ${htka}
• Info update
• Info promo
• Info bot
• Info report
• Req fitur
Dll semua ada di website
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Website', url: 'https://yannmd-ofc.blogspot.com/?m=1'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['website']
handler.tags = ['info']
handler.command = /^website$/i

export default handler