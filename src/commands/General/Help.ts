import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h', 'list', 'menu']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/a3921afb1c290077cf867.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Konnichiwa 👋 I'm 𝔸𝕜𝕖𝕟𝕠 !

╭────────────┈
│ ᴜꜱᴇʀ ɴᴀᴍᴇ: *${M.sender.username}*
│ ᴍʏ ɴᴀᴍᴇ: *𝔸𝕜𝕖𝕟𝕠*
│ ᴍʏ ᴘʀᴇꜰɪx: *${this.client.config.prefix}*
╰────────────┈
🧣 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ Akuma. ᴛʏᴘᴇ " ${this.client.config.prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

〽️𝐓𝐲𝐩𝐞 ${this.client.config.prefix}Akeno 𝐅𝐨𝐫 𝐁𝐨𝐭 𝐆𝐢𝐭𝐇𝐮𝐛 𝐋𝐢𝐧𝐤!
━━━❰ 𝗚𝗲𝗻𝗲𝗿𝗮𝗹 ❱━━━

❆ ${this.client.config.prefix}ᴀᴅᴍɪɴꜱ
❆ ${this.client.config.prefix}ᴇᴠᴇʀʏᴏɴᴇ
❆ ${this.client.config.prefix}ᴍᴏᴅꜱ
❆ ${this.client.config.prefix}ᴘʀᴏꜰɪʟᴇ
❆ ${this.client.config.prefix}ʀᴀɴᴋ
❆ ${this.client.config.prefix}xᴘ
❆ ${this.client.config.prefix}ɪɴᴠɪᴛᴇʟɪɴᴋ
❆ ${this.client.config.prefix}ᴅᴇʟᴇᴛᴇ
❆ ${this.client.config.prefix}ʀᴇᴛʀɪᴇᴠᴇ
❆ ${this.client.config.prefix}ʜɪ
❆ ${this.client.config.prefix}ᴀᴋᴇɴᴏ

━━━❰ 𝗪𝗲𝗲𝗯𝘀 ❱━━━

❆ ${this.client.config.prefix}ᴀɴɪᴍᴇ
❆ ${this.client.config.prefix}ᴀɴɪᴍᴇQᴜᴏᴛᴇ
❆ ${this.client.config.prefix}ᴀɴɪᴍᴇᴄʜᴀʀ
❆ ${this.client.config.prefix}ɢᴇɴꜱʜɪɴᴄʜᴀʀᴀᴄᴛᴇʀ
❆ ${this.client.config.prefix}ʜᴜꜱʙᴀɴᴅᴏ
❆ ${this.client.config.prefix}ʟᴏʟɪ
❆ ${this.client.config.prefix}ᴍᴀɴɢᴀ
❆ ${this.client.config.prefix}ᴘᴏᴋᴇᴍᴏɴ
❆ ${this.client.config.prefix}ʀᴘᴀᴘᴇʀ
❆ ${this.client.config.prefix}ᴠᴛᴜʙᴇʀ
❆ ${this.client.config.prefix}ᴡᴀɪꜰᴜ
❆ ${this.client.config.prefix}ᴀᴍᴇᴍᴇ
❆ ${this.client.config.prefix}ᴄʜᴀʀᴀᴄᴛᴇʀ
❆ ${this.client.config.prefix}ᴄʀᴏꜱꜱᴘʟᴀʏ
❆ ${this.client.config.prefix}ʜᴀɪɢᴜꜱʜᴀ
❆ ${this.client.config.prefix}ʀᴇᴄᴏᴍᴍᴇɴᴅ
❆ ${this.client.config.prefix}ꜱᴀᴜᴄᴇ
❆ ${this.client.config.prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ

━━━❰ 𝗙𝘂𝗻 ❱━━━

❆ ${this.client.config.prefix}ᴄʜᴇꜱꜱ
❆ ${this.client.config.prefix}Qᴜᴏᴛᴇ
❆ ${this.client.config.prefix}ʀᴇᴀᴄᴛ
❆ ${this.client.config.prefix}ᴛʀɪɢɢᴇʀ
❆ ${this.client.config.prefix}ᴛʀᴜᴛʜ
❆ ${this.client.config.prefix}ᴄʜᴀᴛ
❆ ${this.client.config.prefix}ᴅᴀʀᴇ❆❆
❆ ${this.client.config.prefix}ꜰᴀᴄᴛ
❆ ${this.client.config.prefix}ꜱᴀꜰᴇᴊᴏᴋᴇ
❆ ${this.client.config.prefix}ꜱʜɪᴘ
❆ ${this.client.config.prefix}ᴛʀɪᴠɪᴀ
❆ ${this.client.config.prefix}ᴊᴀɪʟ
❆ ${this.client.config.prefix}ᴡᴀɴᴛᴇᴅ
❆ ${this.client.config.prefix}ʀɪᴘ
❆ ${this.client.config.prefix}ᴛʀᴀsʜ

━━━❰ 𝗠𝗲𝗱𝗶𝗮 ❱━━━

❆ ${this.client.config.prefix}ɪɢ
❆ ${this.client.config.prefix}ᴘʟᴀʏ
❆ ${this.client.config.prefix}ꜱᴘᴏᴛɪꜰʏ
❆ ${this.client.config.prefix}ᴛᴀᴋᴇ
❆ ${this.client.config.prefix}ʏᴛᴀᴜᴅɪᴏ
❆ ${this.client.config.prefix}ʏᴛꜱᴇᴀʀᴄʜ
❆ ${this.client.config.prefix}ʏᴛᴠɪᴅᴇᴏ
❆ ${this.client.config.prefix}ɢᴏᴏɢʟᴇ
❆ ${this.client.config.prefix}ʟʏʀɪᴄꜱ
❆ ${this.client.config.prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ

━━━❰ 𝗨𝘁𝗶𝗹𝘀 ❱━━━

❆ ${this.client.config.prefix}ʙʟᴜʀ
❆ ${this.client.config.prefix}ᴋɪᴛᴛᴇɴ
❆ ${this.client.config.prefix}ꜱᴛɪᴄᴋᴇʀ
❆ ${this.client.config.prefix}ꜱᴜʙʀᴇᴅ
❆ ${this.client.config.prefix}ɢᴇᴛɢɪꜰ
❆ ${this.client.config.prefix}ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
❆ ${this.client.config.prefix}ꜱᴛᴇᴀʟ
❆ ${this.client.config.prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ
❆ ${this.client.config.prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
❆ ${this.client.config.prefix}ᴄɪʀᴄʟᴇ

━━━❰ 𝗠𝗼𝗱𝗿𝗮𝘁𝗶𝗼𝗻 ❱━━━

❆ ${this.client.config.prefix}ᴀᴄᴛɪᴠᴀᴛᴇ
❆ ${this.client.config.prefix}ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ
❆ ${this.client.config.prefix}ᴅᴇᴍᴏᴛᴇ
❆ ${this.client.config.prefix}ɢʀᴏᴜᴘᴄʜᴀɴɢᴇ
❆ ${this.client.config.prefix}ᴘʀᴏᴍᴏᴛᴇ
❆ ${this.client.config.prefix}ᴘᴜʀɢᴇ
❆ ${this.client.config.prefix}ʀᴇᴍᴏᴠᴇ
❆ ${this.client.config.prefix}ᴄʟᴏꜱᴇ
❆ ${this.client.config.prefix}ᴏᴘᴇɴ
❆ ${this.client.config.prefix}ʀᴇᴠᴏᴋᴇ
❆ ${this.client.config.prefix}ᴘᴘᴄᴏᴜᴘʟᴇ

━━━❰ 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝘃𝗲 ❱━━━

❆ ${this.client.config.prefix}ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
❆ ${this.client.config.prefix}ᴄᴏᴠɪᴅ
❆ ${this.client.config.prefix}ᴅᴇꜰɪɴᴇ
❆ ${this.client.config.prefix}ᴇʟᴇᴍᴇɴᴛꜱ
❆ ${this.client.config.prefix}ɢɪᴛʜᴜʙ
❆ ${this.client.config.prefix}ᴜʀʙᴀɴᴅɪᴄᴛɪᴏɴᴀʀʏ
❆ ${this.client.config.prefix}ᴡᴇᴀᴛʜᴇʀ

━━━❰ 𝗡𝘀𝗳𝘄 ❱━━━

☣ ɴᴏ ɴꜱꜰᴡ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ᴘʀᴏɢʀᴀᴍᴍᴇᴅ !! ᴛʜɪꜱ ʙᴏᴛ ɪꜱ ɴᴏᴛ ᴍᴀᴅᴇ ꜰᴏʀ ɴꜱꜰᴡ ɢʀᴏᴜᴘꜱ.


╭───────────────╮
│     𝔸𝕜𝕖𝕟𝕠    
│  𝔹𝕪: 𝕒𝕜𝕦𝕞𝕒  
╰───────────────╯
` }
        )
    }
}
