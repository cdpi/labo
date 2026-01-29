
import { readBytes } from "./io.js";

const PNG_SIGNATURE:number = 0x89504E47;

interface IImageSize
	{
	width:number;
	height:number;
	};

async function getSize(path:string):Promise<IImageSize>
	{
	const header = await readBytes(path, 24);

	if (header.readUInt32BE(0) !== PNG_SIGNATURE)
		{
		throw new Error("Invalid format: not a PNG image");
		}

	const size:IImageSize =
		{
		width: header.readUInt32BE(16),
		height: header.readUInt32BE(20)
		};

	return size;
	}

/*
async function main()
	{
	const size = await getSize("../inkscape/noto/emoji_1f347.png");
	console.debug(size);
	}

main();
*/

export
	{
	PNG_SIGNATURE,
	IImageSize,
	getSize
	};
