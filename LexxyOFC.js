/*
Jika Fitur Error Fix Sendiri / Apikey Nya Error
*/

const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const crypto = require('crypto')  
const yts = require('yt-search')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process')
const { color, bgcolor } = require('./lib/color')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { fetchJson, fetchText } = require('./lib/fetcher')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require("./lib/functions");

//Database
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//Setting
prefix = setting.PrefixNya
var owner = setting.OwnerNumber
var ownerName = setting.OwnerName
var botName = setting.BotName
var fakeyoi = setting.FakeNya
var lolkey = setting.LolHuman
var zekais = setting.ZekaisApi
var xziyApi = setting.XziyApi
var creator = 'Lexxy Official'

img1 = fs.readFileSync('./img/fake.jpg')
img2 = fs.readFileSync('./img/thumb.jpg')


//Jam
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const tima = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         

//Modul
module.exports = LexxyOFC = async (LexxyOFC, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked		
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const date = new Date().toLocaleDateString()
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const timestampi = speed();
const latensyi = speed() - timestampi
const ownerNumber = [`6285349947480@s.whatsapp.net`,`${owner}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await LexxyOFC.chats.all()
const groupMetadata = isGroup ? await LexxyOFC.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const Verived = "0@s.whatsapp.net"
const num = "6285349947480@s.whatsapp.net"
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const conts = mek.key.fromMe ? LexxyOFC.user.jid : LexxyOFC.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? LexxyOFC.user.name : conts.notify || conts.vname || conts.name || '-'
const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		
//Mess
mess = {
			wait: "[❗] 𝘛𝘶𝘯𝘨𝘨𝘶 𝘚𝘦𝘣𝘦𝘯𝘵𝘢𝘳...",
			success: "[❗] 𝘋𝘰𝘯𝘦 𝘕𝘪𝘩 𝘒𝘢𝘬",
			error: {
				stick: "[❗] 𝘎𝘢𝘨𝘢𝘭 𝘬𝘢𝘬 𝘤𝘰𝘣𝘢 𝘭𝘢𝘨𝘪",
				Iv: "Link Nya Eror Kack"
			},
			only: {
				admin: "Fitur ini Khusus Admin Grup",
				owner: "Fitur ini Khusus Owner",
				group: "Fitur Hanya Bisa di Grup"
			}
		}
		
const reply = (teks) => {
            LexxyOFC.sendMessage(from, teks, text, {quoted:mek})
        }
var costum = (pesan, tipe, target, target2) => {
LexxyOFC.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}       

//button
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = LexxyOFC.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝑴𝑬𝑵𝑼","footerText": `Sc By LexxyOFC Botz`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return LexxyOFC.relayWAMessage(po, {waitForAck: true})
        }
        
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
LexxyOFC.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	        
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
//Jam Hari Tanggal Tahun
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }
switch(jams){
case 0: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 1: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 2: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 3: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 4: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break; 
case 5: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 6: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 7: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 8: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 9: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 10: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 11: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break; 
case 12: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 13: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 14: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 15: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 16: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 17: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 18: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 19: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 20: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 21: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 22: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 23: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
			}
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

//Auto Ketik
await LexxyOFC.updatePresence(from, Presence.composing)
//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${fakeyoi}`,
                 "title": `${fakeyoi}`,
                 'jpegThumbnail': fs.readFileSync("./img/fake.jpg"),
                        }
	                  } 
                     }   
var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `©pann`, 
orderTitle: `©pann`,
thumbnail: img2,
sellerJid: '0@s.whatsapp.net' 
}
}
}
    var fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
  
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            LexxyOFC.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await LexxyOFC.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            LexxyOFC.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//
const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      LexxyOFC.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    
//Conektion
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//Auto Read
LexxyOFC.chatRead(from, "read")

//Menu
switch (command) {
case 'menu':
tes =`𝐇𝐚𝐥𝐥𝐨 *${pushname}* 👋
${jams}
𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚

[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
✇ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐁𝐨𝐭 : ⌜  *${prefix}*  ⌟
✇ 𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : ${botName}
✇ 𝐍𝐚𝐦𝐚 : ${ownerName}
✇ 𝐎𝐰𝐧𝐞𝐫 : @${owner}
✇ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
✇ 𝐒𝐩𝐞𝐞𝐝 : ${latensyi.toFixed(4)} second
✇ 𝐋𝐢𝐛 : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 
✇ 𝐓𝐲𝐩𝐞 : 𝐍𝐨𝐝𝐞𝐉𝐒
────────────────`
tes2 =`╭─❒ ⌜ 𝙎𝙄𝙈𝙋𝙇𝙀 𝙈𝙀𝙉𝙐 ⌟ ❒
║│${prefix}𝘴𝘵𝘪𝘤𝘬𝘦𝘳 
║│${prefix}𝘱𝘭𝘢𝘺 
║│${prefix}𝘵𝘪𝘬𝘵𝘰𝘬 
║│${prefix}𝘲𝘶𝘰𝘵𝘦𝘴𝘪𝘥 
║│${prefix}𝘲𝘶𝘰𝘵𝘦𝘴𝘪𝘮𝘨 
║│${prefix}𝘧𝘢𝘬𝘵𝘢 
║│${prefix}𝘣𝘪𝘫𝘢𝘬 
║│${prefix}𝘣𝘶𝘤𝘪𝘯 
║│${prefix}𝘮𝘦𝘮𝘦𝘴 
║│${prefix}𝘤𝘦𝘳𝘱𝘦𝘯 
║│${prefix}family100
║│${prefix}caklontong
└❏─────────────
╭─❒ ⌜ Group Menu ⌟ ❒
║│${prefix}kicktime Tag
║│${prefix}tagall
║│${prefix}timer 10 detik
║│${prefix}notif Teks
║│${prefix}wame
└❏─────────────
╭─❒ ⌜ 𝐌𝐚𝐤𝐞𝐫 𝐌𝐞𝐧𝐮 ⌟ ❒
║│${prefix}nulis「 text 」
║│${prefix}attp「 text 」
║│${prefix}multicolor3d「 text 」
║│${prefix}watercolor「 text 」
║│${prefix}luxurygold「 text 」
║│${prefix}galaxywallpaper「 text 」
║│${prefix}lighttext「 text 」
║│${prefix}beautifulflower「 text 」
║│${prefix}puppycute「 text 」
║│${prefix}royaltext「 text 」
║│${prefix}heartshaped「 text 」
║│${prefix}birthdaycake「 text 」
║│${prefix}galaxystyle「 text 」
║│${prefix}hologram3d
║│${prefix}snow 「 text 」
║│${prefix}cans 「 text 」
║│${prefix}ganz 「 text 」
║│${prefix}glossychrome
║│${prefix}greenbush 「 text 」
║│${prefix}metallogo「 text 」
║│${prefix}noeltext「 text 」
║│${prefix}glittergold「 text 」
║│${prefix}textcake「 text 」
║│${prefix}starsnight「 text 」
║│${prefix}wooden3d「 text 」
║│${prefix}textbyname「 text 」
║│${prefix}galaxybat「 text 」
║│${prefix}writegalacy「 text 」
║│${prefix}snow3d「 text 」
║│${prefix}birthdayday「 text 」
║│${prefix}wetglass「 text 」
║│${prefix}goldplaybutton「 text 」
║│${prefix}silverplaybutton「 text 」
║│${prefix}freefire「 text 」
║│${prefix}pornhub「 text 」
║│${prefix}glitch「 text 」
║│${prefix}space「 text 」
║│${prefix}avenger「 text 」
║│${prefix}ninjalogo「 text 」
║│${prefix}lionlogo「 text 」
║│${prefix}marvelstudio「 text 」
║│${prefix}wolflogo「 text 」
║│${prefix}steel3d「 text 」
║│${prefix}wallgravity「 text 」
║│${prefix}poly「 text 」
║│${prefix}bold「 text 」
║│${prefix}shadow「 text 」
║│${prefix}wood「 text 」
║│${prefix}coffe「 text 」
║│${prefix}smoke「 text 」
║│${prefix}rainbow「 text 」
└❏─────────────
╭─❒ ⌜ Animals Hewan ⌟ ❒
║│${prefix}fox
║│${prefix}dog
║│${prefix}cat
║│${prefix}panda
║│${prefix}panda1
║│${prefix}bird
║│${prefix}koala
└❏─────────────
╭─❒ ⌜ 𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮 ⌟ ❒
║│${prefix}𝘴𝘰𝘶𝘯𝘥1 
║│${prefix}𝘴𝘰𝘶𝘯𝘥2 
║│${prefix}𝘴𝘰𝘶𝘯𝘥3 
║│${prefix}𝘴𝘰𝘶𝘯𝘥4 
║│${prefix}𝘴𝘰𝘶𝘯𝘥5 
║│${prefix}𝘴𝘰𝘶𝘯𝘥6 
║│${prefix}𝘴𝘰𝘶𝘯𝘥7 
║│${prefix}𝘴𝘰𝘶𝘯𝘥8 
║│${prefix}𝘴𝘰𝘶𝘯𝘥9 
║│${prefix}𝘴𝘰𝘶𝘯𝘥10 
║│${prefix}𝘴𝘰𝘶𝘯𝘥11 
║│${prefix}𝘴𝘰𝘶𝘯𝘥12 
║│${prefix}𝘴𝘰𝘶𝘯𝘥13 
║│${prefix}𝘴𝘰𝘶𝘯𝘥14 
║│${prefix}𝘴𝘰𝘶𝘯𝘥15
║│${prefix}𝘴𝘰𝘶𝘯𝘥16
║│${prefix}𝘴𝘰𝘶𝘯𝘥17
║│${prefix}𝘴𝘰𝘶𝘯𝘥18
║│${prefix}𝘴𝘰𝘶𝘯𝘥19
║│${prefix}𝘴𝘰𝘶𝘯𝘥20
║│${prefix}𝘴𝘰𝘶𝘯𝘥21 
║│${prefix}𝘴𝘰𝘶𝘯𝘥22 
║│${prefix}𝘴𝘰𝘶𝘯𝘥23 
║│${prefix}𝘴𝘰𝘶𝘯𝘥24 
║│${prefix}𝘴𝘰𝘶𝘯𝘥25 
║│${prefix}𝘴𝘰𝘶𝘯𝘥26 
║│${prefix}𝘴𝘰𝘶𝘯𝘥27 
║│${prefix}𝘴𝘰𝘶𝘯𝘥28 
║│${prefix}𝘴𝘰𝘶𝘯𝘥29 
║│${prefix}𝘴𝘰𝘶𝘯𝘥30 
└❏─────────────
╭─❒ ⌜ VN Menu ⌟ ❒
║│${prefix}bass
║│${prefix}tupai
║│${prefix}gemuk
║│${prefix}reverse
║│${prefix}volume
└❏─────────────
╭─❒ ⌜ Asupan Menu ⌟ ❒
║│${prefix}cecanrandom
║│${prefix}bocil
║│${prefix}ukhti
║│${prefix}santuy
║│${prefix}rika
║│${prefix}ghea
║│${prefix}hijaber
└❏─────────────
╭─❒ ⌜ 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮 ⌟ ❒
║│${prefix}𝘲𝘶𝘰𝘵𝘦𝘴
║│${prefix}𝘥𝘢𝘳𝘬𝘫𝘰𝘬𝘦
║│${prefix}𝘮𝘦𝘮𝘦
║│${prefix}𝘳𝘢𝘵𝘦
║│${prefix}𝘬𝘢𝘱𝘢𝘯𝘬𝘢𝘩
║│${prefix}𝘢𝘱𝘢𝘬𝘢𝘩
║│${prefix}𝘣𝘪𝘴𝘢𝘬𝘢𝘩
║│${prefix}𝘤𝘢𝘳𝘪𝘱𝘦𝘴𝘢𝘯
║│${prefix}𝘴𝘭𝘰𝘵
║│${prefix}𝘴𝘶𝘪𝘵𝘴
║│${prefix}𝘵𝘢𝘨𝘮𝘦
║│${prefix}𝘵𝘢𝘨
║│${prefix}𝘳𝘦𝘢𝘥𝘮𝘰𝘳𝘦
║│${prefix}𝘧𝘪𝘵𝘯𝘢𝘩𝘱𝘤
└❏─────────────`
but = [
{buttonId:`${prefix}owner`, buttonText: {displayText: 'PEMILIK'}, type: 1},
{buttonId:`${prefix}info`, buttonText: {displayText: 'INFO'}, type: 1}
]
sendButLocation(from, tes, tes2, img2, but)
hh = fs.readFileSync('./vn/bndr.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: flexx, mimetype: 'audio/mp4', ptt:true})  
break
case 'darkjoke':
case 'meme':
buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apikey1}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await LexxyOFC.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By Lexxy OFC', imageMessage: imageMsg,
contentText:`DONE NIH JANGAN LUPA Subscribe Lexxy Official`,buttons,headerType:4}
prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: flexx})
LexxyOFC.relayWAMessage(prep)
break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: flexx })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: flexx })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: flexx })
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: flexx })
break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await LexxyOFC.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
LexxyOFC.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'slot':
case 'slots':
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
LexxyOFC.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: flexx })
break
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'tag':
if (args.length < 1) return reply(`Nomernya Mana ?\nContoh ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
LexxyOFC.sendMessage(from, tagq, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':
var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
LexxyOFC.sendMessage(from, tagu, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'readmore':
case 'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  reply(mess.error.api)
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break
case 'fitnahpc':
 if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
var gh = body.slice(10)
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
LexxyOFC.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
break
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
      break
      case 'sound71':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
          break      
case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    
if (args.length == 0) return reply(`Example: ${prefix + command} RazoR`)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=Beli Apikey&text=${txt1}`).then((gambar) => {
                   LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `LexxyOFC Bot Wa`, quoted : fvoc})
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
               
                    if (args.length == 0) return reply(`Example: ${prefix + command} RazoR`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=Beli Apikey&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `MEZ razor`, quoted : fvoc})
                    })
                    break
break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Lexxy OFC`)
txt1 = args[0]
txt2 = args[1]
getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe Lexxy Official`, quoted : flexx})
})
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} Lexxy OFC`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe Lexxy Official`, quoted : flexx})
})
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (args.length == 0) return reply(`Example: ${prefix + command} LexxyOFC Xd`)
txt1 = args[0]
txt2 = args[1]
getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe Lexxy Official`, quoted : flexx})
})
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Lexxy OFC`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe Lexxy Official`, quoted : flexx}) 
})
break
case 'ssweb':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Lexxy Gantenk`)
ini_url = args.join(" ")
reply(mess.wait)
getBuffer(`https://ziy.herokuapp.com/api/ssweb?apikey=${xziyApi}&url=${ini_url}`).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, image, { thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe Lexxy Official`, quoted : flexx })
})
break
case 'nulis':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy Official`)
bo = args.join(" ")
reply(mess.wait)
nul = await getBuffer(`https://ziy.herokuapp.com/api/nulis?text=${bo}&apikey=${xziyApi}`)
LexxyOFC.sendMessage(from, nul, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'shadow':
case 'flaming':
case 'rainbow':
case 'smoke':
case 'wood':
case 'coffe':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
rn = await getBuffer(`http://zekais-api.herokuapp.com/oxy/${command}?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, rn, image, { quoted: mek, caption: 'Nih Kak Hasil Makernya' })
break
case 'bold':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
bl = await getBuffer(`http://zekais-api.herokuapp.com/oxy/bold?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, bl, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: '𝑁𝑖ℎ 𝐵𝑟𝑜 𝑉𝑖𝑑𝑒𝑜 𝑁𝑦𝑎'})
break
case 'poly':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
pl = await getBuffer(`http://zekais-api.herokuapp.com/oxy/poly?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, pl, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: '𝑁𝑖ℎ 𝐵𝑟𝑜 𝑉𝑖𝑑𝑒𝑜 𝑁𝑦𝑎'})
break
case 'cerpen':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/cerpen?apikey=${zekais}`)
ini_txt =`Judul :${get.title}\n`
ini_txt +=`Pengarang : ${get.pengarang}\n`
ini_txt +=`Category : ${get.category}\n\n`
ini_txt +=`Cerita : ${get.post}`
reply(ini_txt)
break
case 'memes':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/dankmemes?apikey=${zekais}`)
ini = await getBuffer(`${get.result}`)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek })
break
case 'bucin':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/bucin?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'bijak':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/bijak?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'fakta':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/fakta?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'quotesimg':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/quotepic?apikey=${zekais}`)
ini = await getBuffer(`${get.quotes}`)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: '𝑸𝒖𝒐𝒕𝒆𝒔 𝑩𝒚 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍' })
break
case 'quotesid':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/quotes?apikey=${zekais}`)
ini_txt =`*${get.quotes}*\n\n`
ini_txt +=`*Author : @${get.author}*`
reply(ini_txt)
break
case 'tiktok':
tt = args.join(" ")
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/tiktok2?url=${tt}&apikey=${zekais}`)
ini = await getBuffer(get.result.no_wm)
LexxyOFC.sendMessage(from, ini, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: '𝑁𝑖ℎ 𝐵𝑟𝑜 𝑉𝑖𝑑𝑒𝑜 𝑁𝑦𝑎'})
break
case 'sbbhhc':
case 'infbbbhosc':
case 'info':
scnya = `┏━➤ 「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」
✯ 𝐍𝐚𝐦𝐚 : ${botName}
✯ 𝐎𝐰𝐧𝐞𝐫 : ${ownerName}
✯ 𝐏𝐫𝐞𝐟𝐢𝐱 : 「 𝐌𝐮𝐥𝐭𝐢 𝐏𝐫𝐞𝐟𝐢𝐱 」
✯ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : 𝐀𝐧𝐝𝐫𝐨𝐢𝐝 11
✯ 𝐋𝐢𝐛 : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬
✯ 𝐓𝐲𝐩𝐞 : 𝐍𝐨𝐝𝐞𝐉𝐒
✯ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━

𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆 𝑭𝒐𝒓 𝑵𝒆𝒘 𝑼𝒑𝒅𝒂𝒕𝒆!`
buttons = [
{buttonId:`${prefix}menu`, buttonText: {displayText: '</BACK MENU'}, type: 1}
]
const info = {
    contentText: `${scnya}`,
    footerText: ``,
    buttons: buttons,
    headerType: 1
}
await LexxyOFC.sendMessage(from, info, MessageType.buttonsMessage, {quoted: mek})
hh = fs.readFileSync('./vn/gktw.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: flexx, mimetype: 'audio/mp4', ptt:true})  
break
case 'playmp3':
case 'play':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `${fakeyoi}`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
LexxyOFC.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName} ✨`)
break      
//MAKERMENU NO APIKEY
case 'tomlol': 
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")

tomlol = await getBuffer(`https://hansxd.nasihosting.com/serti1/img.php?nama=${catat}`)
LexxyOFC.sendMessage(from, tomlol, image, { quoted:flexx,caption:'ᵈⁱˢᵘᵏᵃⁱ ᵒˡᵉʰ ᵏʳᵉᵃᵗᵒʳ' })
break
case 'nulis': 
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")

catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
LexxyOFC.sendMessage(from, catat, image, { quoted:flexx,caption:'ᵈⁱˢᵘᵏᵃⁱ ᵒˡᵉʰ ᵏʳᵉᵃᵗᵒʳ' })
break
case 'ganz': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")

ganz = await getBuffer(`https://api.zeks.me/api/gtext?text1=${matrix}&text2=GANZ&apikey=apivinz`)
LexxyOFC.sendMessage(from, ganz, image, { quoted:flexx,caption:'ᵈⁱˢᵘᵏᵃⁱ ᵒˡᵉʰ ᵏʳᵉᵃᵗᵒʳ' })
break
///ASUPAN BOCIL MERESAHKAN
case 'cecanrandom':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
LexxyOFC.sendMessage(from, buffer, image, {quoted: flexx, caption: 'Nih Ngab Cecan Random🗿'})
break
case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
LexxyOFC.sendMessage(from, buffer, video, {quoted: flexx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
LexxyOFC.sendMessage(from, buffer, video, {quoted: flexx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
LexxyOFC.sendMessage(from, buffer, video, {quoted: flexx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
LexxyOFC.sendMessage(from, buffer, video, {quoted: flexx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)

buffer = await getBuffer(ini.result.url)
LexxyOFC.sendMessage(from, buffer, video, {quoted: flexx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
///HEWAN MENU ANIMALS
case 'fox':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   LexxyOFC.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: flexx})
                   break
                   case 'dog':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   LexxyOFC.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: flexx})
                   break
                   case 'cat':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   LexxyOFC.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: flexx})
                   break
                   case 'panda':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   LexxyOFC.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: flexx})
                   break
                   case 'panda1':  
                   
			       	
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   LexxyOFC.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: flexx})
                   break
                   case 'bird':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   LexxyOFC.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: flexx})
                   break
                   case 'koala':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   LexxyOFC.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: flexx})
                   break
/// FAMILLY 1000
case 'family100':
          if (!isGroup) return reply(mess.only.group)
				data = fs.readFileSync('./lib/family100.js');
                fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					LexxyOFC.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'', text, {quoted: flexx}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					LexxyOFC.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					LexxyOFC.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					LexxyOFC.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					LexxyOFC.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: flexx }) // ur cods
					}, 0) // 1000 = 1s,
					 
					break
case 'caklontong':
          if (!isGroup) return reply(mess.only.group)
				data = fs.readFileSync('./lib/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					LexxyOFC.sendMessage(from, Jawaban, text, {quoted: flexx})
					}, 30000)
					setTimeout( () => {
					LexxyOFC.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					LexxyOFC.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					LexxyOFC.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s
					LexxyOFC.sendMessage(from, Pertanyaan, text, {quoted: flexx})
					 
				   break
//VN BOT WA TERBARU
case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await LexxyOFC.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
LexxyOFC.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
		case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await LexxyOFC.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
LexxyOFC.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftrol})
fs.unlinkSync(ran)
})
break
case 'gemuk':
                  encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediaz = await LexxyOFC.downloadAndSaveMediaMessage(encmediaz)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediaz)
                     if (err) return ephe('Error!')
                     hah = fs.readFileSync(ran)
                  LexxyOFC.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
                  break
   case 'bass':                 
                  encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediao = await LexxyOFC.downloadAndSaveMediaMessage(encmediao)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediao)
                     if (err) return reply('Error!')
                     hah = fs.readFileSync(ran)
                     LexxyOFC.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
               break
            case 'reverse':
            
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            LexxyOFC.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftrol })
            fs.unlinkSync(ran)
            })
            break
//DONASI NYA KAKA SEIKLASNYA
case 'donasi':
donasi =`اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016

╠════════════════════
║╭──❉ *DONASI * ❉─────
║│➸ *OVO*:TIDAK TERSEDIA
║│➸ *DANA*: 6285349947480
║│➸ *PULSA*:62 85349947480
║╰──────────────────
║
║❋ཻུ۪۪⸙ IT'S ME PAN ❋ཻུ۪۪⸙
═══════════════════`
buttons = [
{buttonId:`listmenu`, buttonText: {displayText: '💟LIST MENU💟️'}, type: 1},
{buttonId:`owner`, buttonText: {displayText: '🗣️OWNER BOT🗣️'}, type: 1}
]
const donatt = {
    contentText: `${donasi}`,
    buttons: buttons,
    headerType: 1
}
await LexxyOFC.sendMessage(from, donatt, MessageType.buttonsMessage, {quoted: flexx})
		break
//BATAS🗿
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
LexxyOFC.sendMessage(from, buffer, sticker, { quoted: flexx })
break
//━━━━━━━━━━━━━━━[ NEW UPFATE BOT WA ]━━━━━━━━━━━━━━━━━//
case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
case 'notif':
LexxyOFC.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await LexxyOFC.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: flexx
} 
LexxyOFC.sendMessage(from, options, text)
break
case 'wa.me':
		case 'wame':
  					
  					LexxyOFC.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					LexxyOFC.sendMessage(from, options, text, { quoted: flexx } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
  case 'kicktime':
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					LexxyOFC.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					LexxyOFC.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					LexxyOFC.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					LexxyOFC.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
case 'tagall':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
//━━━━━━━━━━━━━━━[ FITUR NSFW ]━━━━━━━━━━━━━━━━━//



	
//BATASNYA
default:
           if (budy.startsWith("$ ")){
           if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')
           	console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(chats.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return LexxyOFC.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'pink'))
        }
	}
}


	
    
