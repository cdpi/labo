
import { getEmojiCodePoints } from "./util.js";

function getNotoEmojiURL(emoji:string):string
	{
	const hex:string = getEmojiCodePoints(emoji).join("_");

	return `https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/emoji_u${hex}.svg`;
	}

async function downloadNotoEmoji(emoji:string):Promise<string>
	{
	const response:Response = await fetch(getNotoEmojiURL(emoji));

	const text:string = await response.text();

	return text;
	}

export
	{
	getNotoEmojiURL,
	downloadNotoEmoji
	};
