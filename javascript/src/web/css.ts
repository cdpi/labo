
import { hex as toHex } from "../image/color.js";
import { unpack888 } from "../util/byte.js"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hex(color:number):string
	{
	return toHex(color, "#", 6);
	}

function rgb(color:number):string
	{
	const rgb:Array<number> = unpack888(color);

	return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	hex,
	rgb
	};
