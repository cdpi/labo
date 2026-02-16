
import { Bitmap, Jimp } from "jimp";

import { getPixelsFromBitmap } from "../../../image/image.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ImageError extends Error
	{
	public constructor(message:string)
		{
		super(message);

		//this.name = "ImageError";
		}
	}

class ImageManager
	{
	}

class IconManager extends ImageManager
	{
	private static SIZE:number = 16;

	public async getPixels(path:string):Promise<Uint32Array>
		{
		const bitmap:Bitmap = (await Jimp.read(path)).bitmap;

		if (!this.isCorrectSize(bitmap))
			{
			throw new ImageError(`Invalid icon size, must be ${IconManager.SIZE}x${IconManager.SIZE}`);
			}

		const pixels:Uint32Array = getPixelsFromBitmap(bitmap);

		return pixels;
		}

	private isCorrectSize(bitmap:Bitmap):boolean
		{
		return (bitmap.width === IconManager.SIZE) && (bitmap.height === IconManager.SIZE);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	ImageError,
	ImageManager,
	IconManager
	};
