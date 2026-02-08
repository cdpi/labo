
type RGB =
	{
	red:number;
	green:number;
	blue:number;
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const components888 = (color:number):Array<number> =>
	{
	const component1:number = (color >> 16) & 0xFF;
	const component2:number = (color >> 8) & 0xFF;
	const component3 = color & 0xFF;

	return new Array<number>(component1, component2, component3);
	};

//const color888 =

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rgb888 = (color:number):RGB =>
	{
	const components = components888(color);

	return {red: components[0], green: components[1], blue: components[3]};
	};

//const rgb888rgb565 = (color:number):number => rgb888(color);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

