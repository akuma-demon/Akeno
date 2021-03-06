/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "akeno",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}akeno`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			'https://c.tenor.com/HXozyFon55kAAAAC/highschooldxd-akeno.gif';
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `ā¤ļø *AKENO* ā¤ļø\n\nš® *Description: A Fully Oriented Whatsapp Bot designed by Fantox. Don't forget to give a star to my repo before fork.*\n\n š*Akeno: https://github.com/FantoX001/Akeno-Whatsapp-Bot*\n\n š*Akeno's-Guide: https://github.com/FantoX001/Akeno-Guides*\n\n`,
			}
		);
	};
}
