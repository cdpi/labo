
/*
//function fromRGB888ToRGB565(color:IRGB):IRGB;
//function fromRGB888ToRGB565(color:IRGB, isLittleEndian:boolean):IRGB;
function fromRGB888ToRGB565(color:IRGB):number;
function fromRGB888ToRGB565(color:IRGB, isLittleEndian:boolean):number;

function fromRGB888ToRGB565(color:number):number;
function fromRGB888ToRGB565(color:number, isLittleEndian:boolean):number;

function fromRGB888ToRGB565(color:IRGB|number, isLittleEndian:boolean = false):number
	{
	let red:number;
	let green:number;
	let blue:number;

	if (typeof color === "number")
		{
		red = (color >> 16) & 0xFF;
		green = (color >> 8) & 0xFF;
		blue = color & 0xFF;
		}
	else
		{
		red = color.red;
		green = color.green;
		blue = color.blue;
		}

	const red5:number = (red >> 3) & 0x1F;
	const green6:number = (green >> 2) & 0x3F;
	const blue5:number = (blue >> 3) & 0x1F;

	let rgb565:number = (red5 << 11) | (green6 << 5) | blue5;

	if (isLittleEndian)
		{
		const highByte = (rgb565 >> 8) & 0xFF;
		const lowByte = rgb565 & 0xFF;

		rgb565 = (lowByte << 8) | highByte;
		}

	return rgb565;
	}
*/
