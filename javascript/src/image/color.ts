
import { pack565, pack888, swap, unpack888, unpack8888 } from "../util/byte.js"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hex(color:number, prefix:string, length:number):string
	{
	return prefix + (color >>> 0).toString(16).toUpperCase().padStart(length, "0");
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rgb888rgb565(color:number):number
	{
	return pack565(unpack888(color));
	}

function rgb888rgb565be(color:number):number
	{
	return rgb888rgb565(color);
	}

function rgb888rgb565le(color:number):number
	{
	return swap(rgb888rgb565(color));
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rgb8888rgb565(color:number):number
	{
	return pack565(unpack8888(color).slice(0, 3));
	}

function rgb8888rgb565be(color:number):number
	{
	return rgb8888rgb565(color);
	}

function rgb8888rgb565le(color:number):number
	{
	return swap(rgb8888rgb565(color));
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rgb8888rgb888(color:number):number
	{
	return pack888(unpack8888(color).slice(0, 3));
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//type RGB = [number, number, number];
//type RGBA = [number, number, number, number];

type RGB =
	{
	red:number,
	green:number,
	blue:number
	};

type RGBA = RGB &
	{
	alpha:number
	};

const white:RGBA = { red: 255, green: 255, blue: 255, alpha: 255 };
const black:RGB = { red: 0, green: 0, blue: 0 };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
interface IColor
	{
	readonly red:number;
	readonly green:number;
	readonly blue:number;
	readonly alpha?:number;
	toColor():number;
	}
*/

/*
class Color implements IColor
	{
	public readonly red:number;
	public readonly green:number;
	public readonly blue:number;
	//public readonly alpha:number;

	public constructor(red:number, green:number, blue:number)
		{
		this.red = red;
		this.green = green;
		this.blue = blue;
		}

	public toColor(): number
		{
		return 0;
		}
	}
*/

/*
function fromRGB888ToRGB565(color:number, isLittleEndian:boolean = false):number
	{
	const rgb565:number = pack565(unpack888(color));

	if (isLittleEndian)
		{
		return swap(rgb565);
		}

	return rgb565;
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	hex,

	rgb888rgb565,
	rgb888rgb565be,
	rgb888rgb565le,

	rgb8888rgb565,
	rgb8888rgb565be,
	rgb8888rgb565le,

	rgb8888rgb888
	};
