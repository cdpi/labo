
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Color
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IColor
	{
	readonly red:number;
	readonly green:number;
	readonly blue:number;
	readonly alpha?:number;
	toColor():number;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

	//return `rgb(${color.red}, ${color.green}, ${color.blue})`;

	public static toComponents(color:number):Array<number>
		{
		const component1:number = (color >> 16) & 0xFF;
		const component2:number = (color >> 8) & 0xFF;
		const component3 = color & 0xFF;

		return new Array<number>(component1, component2, component3);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IColor,
	Color
	};
