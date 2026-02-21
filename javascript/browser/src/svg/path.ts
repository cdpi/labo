
import { IPoint } from "@cdpi/geometry/point.js";
import { Curve } from "@cdpi/geometry/curve.js";
import { pointToString } from "./util.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

	public constructor(point:IPoint)
		{
		super(new Array<IPoint>(point));
		}

	public toString():string
		{
		return `${this.type} ${pointToString(this.points[0])}`;
		}
	}

class CurveTo extends Command
	{
	type:Type = "C";

	public constructor(controlPointFrom:IPoint, controlPointTo:IPoint, to:IPoint)
		{
		super(new Array<IPoint>(controlPointFrom, controlPointTo, to));
		}

	public toString():string
		{
		return `${this.type} ${pointToString(this.points[0])}, ${pointToString(this.points[1])}, ${pointToString(this.points[2])}`;
		}
	}

class ClosePath extends Command
	{
	type:Type = "Z";

	public constructor()
		{
		super(new Array<IPoint>());
		}

	public toString():string
		{
		return this.type;
		}
	}

class Path
	{
	public static curved(points:Array<IPoint>, tension:number = 0.2)
		{
		const commands:Array<ICommand> = new Array<ICommand>();

		const n:number = points.length;

		commands.push(new MoveTo(points[0]));

		for (let i = 0; i < n; i++)
			{
			const point1:IPoint = points[(i - 1 + n) % n];
			const point2:IPoint = points[i];
			const point3:IPoint = points[(i + 1) % n];
			const point4:IPoint = points[(i + 2) % n];

			const controlPoints:Array<IPoint> = Curve.getControlPoints(point1, point2, point3, point4, tension);

			commands.push(new CurveTo(controlPoints[0], controlPoints[1], point3));
			}

		commands.push(new ClosePath());

		return commands;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function polygonToPath(points:Array<IPoint>, tension:number = 0.2):string
	{
	return Path.curved(points, tension).map(command => command.toString()).join(" ");
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	ICommand,
	Command,

	MoveTo,
	CurveTo,
	ClosePath,

	Path,

	polygonToPath
	};
