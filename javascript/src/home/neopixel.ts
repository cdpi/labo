
import { Buffer } from "node:buffer";

import { Bitmap, Jimp } from "jimp";

//import { IConnectedObject } from "./home.js";

interface INeoPixel //extends IConnectedObject
	{
	//convert(buffer:Buffer):void;
	//convert(buffer:Array<number>):void;
	}

class NeoPixel implements INeoPixel
	{
	public constructor()
		{
		}

	//public convert(buffer:Buffer|Array<number>):void
	public convert(bitmap:Bitmap):void
		{
		const ok:boolean = (bitmap.width === 16) && (bitmap.height === 16);

		const ssds:Buffer = bitmap.data;

		ssds.readUint32LE();
		}

	public async test()
		{
		//const image = await Jimp.read("tests/images/emoji_1f352.png");

		//const bitmap:Bitmap = image.bitmap;

		//console.debug(image.bitmap.data);

		//image.resize(256, 100);
		//image.greyscale();
		//await image.write('test/output.png');

		//fromRGB888ToRGB565(544);
		}
	}

//new NeoMatrix().test();

export
	{
	INeoPixel,
	NeoPixel
	};
