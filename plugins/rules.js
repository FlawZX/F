let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *RULES* ${htka}

Click Link website berikut, Baca peraturan agar terhindar dari Suspand/banned permanen 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Link', url: 'https://yannmd-ofc.blogspot.com/2022/07/bot-rules-1.html'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

export default handler