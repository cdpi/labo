
import { getCodePoints, notVariationSelector16 } from "../util/unicode.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getNotoEmojiName(emoji:string):string
	{
	return "emoji_u" + getCodePoints(emoji)
		.filter(notVariationSelector16)
		.map((code:number) => code.toString(16))
		.join("_");
	}

function getNotoEmojiURL(emoji:string, format:string = "svg"):string
	{
	const filename:string = `${getNotoEmojiName(emoji)}.${format}`;

	return `https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/${filename}`;
	}

async function downloadNotoEmoji(emoji:string):Promise<string>
	{
	const response:Response = await fetch(getNotoEmojiURL(emoji));

	const text:string = await response.text();

	return text;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getNotoEmojiName,
	getNotoEmojiURL,
	downloadNotoEmoji
	};
