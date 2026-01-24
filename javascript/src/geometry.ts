
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Geometry
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
	}

function pointToString(point:IPoint):string
	{
	return `${point.x},${point.y}`;
	}

function pointsToString(points:Array<IPoint>):string
	{
	return points.map(pointToString).join(" ");
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Polygon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Polygon // implements IPath
	{
	/*
	points:Array<IPoint>;

	public constructor()
		{
		}
	*/

	public toBezier(from:IPoint, to:IPoint, tension:number):Array<IPoint>
		{
		const dx = to.x - from.x;
		const dy = to.y - from.y;

		const controlPoint1 = {x: from.x + dx * tension, y: from.y};
		const controlPoint2 = {x: to.x - dy * tension, y: to.y};

		return new Array(from, controlPoint1, controlPoint2, to);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IPoint,
	Point,
	Polygon
	};
