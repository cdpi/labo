
import { Curve } from "#util/geometry/curve.js";
import { IPoint } from "#util/geometry/point.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Path
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const pointToString = (point:IPoint):string => `${point.x} ${point.y}`;

const MoveTo = (point:IPoint):string => `M ${pointToString(point)}`;

const CurveTo = (controlPointFrom:IPoint, controlPointTo:IPoint, to:IPoint):string =>
	{
	return `C ${pointToString(controlPointFrom)}, ${pointToString(controlPointTo)}, ${pointToString(to)}`;
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: Dans geometry ou pas...

function polygonToPath(points:Array<IPoint>, tension:number = 0.2):string
	{
	const commands:Array<string> = new Array<string>();

	const n:number = points.length;

	commands.push(MoveTo(points[0]));

	for (let i = 0; i < n; i++)
		{
		const point1:IPoint = points[(i - 1 + n) % n];
		const point2:IPoint = points[i];
		const point3:IPoint = points[(i + 1) % n];
		const point4:IPoint = points[(i + 2) % n];

		const controlPoints:Array<IPoint> = Curve.getControlPoints(point1, point2, point3, point4, tension);

		commands.push(CurveTo(controlPoints[0], controlPoints[1], point3));
		}

	commands.push("Z");

	return commands.join(" ");
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Path
	{
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
type Type = "M" | "L" | "C" | "Q" | "Z";

interface ICommand
	{
	type:Type;
	points:Array<IPoint>;
	}

abstract class Command implements ICommand
	{
	abstract type:Type;
	points:Array<IPoint>;

	constructor(points:Array<IPoint>)
		{
		this.points = points;
		}
	}

class MoveTo extends Command
	{
	type:Type = "M";
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	polygonToPath
	};
