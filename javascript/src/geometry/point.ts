
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IPoint
	{
	x:number;
	y:number;
	}

class Point implements IPoint
	{
	public readonly x:number;
	public readonly y:number;

	public constructor(x:number, y:number)
		{
		this.x = x;
		this.y = y;
		}

	// TODO: Pas ici car dépends des besoins: SVG,...
	public static toString(point:IPoint):string
		{
		return `${point.x},${point.y}`;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function pointToString(point:IPoint):string
	{
	return `${point.x},${point.y}`;
	}
*/

function pointsToString(points:Array<IPoint>):string
	{
	return points.map(Point.toString).join(" ");
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IPoint,
	Point,
	pointsToString
	};
