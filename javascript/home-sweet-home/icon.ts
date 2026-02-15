
import { Bitmap, Jimp } from "jimp";

import { getPixelsFromBitmap } from "../image/image.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ICON_SIZE:number = 16;

function checkSize(bitmap:Bitmap):boolean
	{
	return (bitmap.width === ICON_SIZE) && (bitmap.height === ICON_SIZE);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function process(path:string):Promise<Uint32Array>
	{
	const bitmap:Bitmap = (await Jimp.read(path)).bitmap;

	if (!checkSize(bitmap))
		{
		throw new Error("Icon not 16x16");
		}

	const pixels:Uint32Array = await getPixelsFromBitmap(bitmap);

	return pixels;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	process
	};
