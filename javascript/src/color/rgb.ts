
import { IColor, Color } from "./color.js";
import { IGreenRedBlue, GRB } from "./grb.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IRedGreenBlue extends IColor
	{
	toRGB565():IRedGreenBlue;
	toGRB():IGreenRedBlue;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class RGB extends Color implements IRedGreenBlue
	{
	public constructor(red:number, green:number, blue:number)
		{
		super(red, green, blue);
		}

	toRGB565():RGB
		{
		//return new RGB(0,0,0);
		throw new Error("not implemented");
		}

	toGRB():GRB
		{
		//return new GRB(0,0,0);
		throw new Error("not implemented");
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rgb888 = (color:number):RGB =>
	{
	const components = Color.toComponents(color);

	return new RGB(components[0], components[1], components[1]);
	};

const fromRGB888ToRGB565 = (color:number):number => rgb888(color).toRGB565().toColor();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IRedGreenBlue,
	RGB,
	rgb888,
	fromRGB888ToRGB565
	};
