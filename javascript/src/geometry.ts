
import { getRandom } from "./util";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Geometry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TWOPI = 2 * Math.PI;

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
// Polygon1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Polygon1
	{
	readonly n:number;

	constructor(n:number)
		{
		this.n = n;
		}

	getVertices(cx:number, cy:number, r:number):Array<Point>
		{
		const vertices = new Array<Point>();

		const pii = TWOPI / this.n;

		for (let i = 0; i < this.n; i++)
			{
			const theta = i * pii;

			const x = cx + r * Math.cos(theta);
			const y = cy + r * Math.sin(theta);

			vertices.push(new Point(x, y));
			}

		return vertices;
		}

	getRandomVertices(cx:number, cy:number, rmin:number, rmax:number):Array<Point>
		{
		const vertices = new Array<Point>();

		const pii = TWOPI / this.n;

		for (let i = 0; i < this.n; i++)
			{
			const theta = i * pii;

			const r = getRandom(rmin, rmax);

			const x = cx + r * Math.cos(theta);
			const y = cy + r * Math.sin(theta);

			vertices.push(new Point(x, y));
			}

		return vertices;
		}

	getSVG(cx:number, cy:number, r:number, fill:string = "none", stroke:string = "black"):string
		{
		const points = pointsToString(this.getVertices(cx, cy, r));

		return `<polygon points="${points}" fill="${fill}" stroke="${stroke}"/>`;
		}

	getRandomSVG(cx:number, cy:number, rmin:number, rmax:number, fill:string = "none", stroke:string = "black"):string
		{
		const points = pointsToString(this.getRandomVertices(cx, cy, rmin, rmax));

		return `<polygon points="${points}" fill="${fill}" stroke="${stroke}"/>`;
		}
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
// Hexagon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Hexagon extends Polygon1
	{
	constructor()
		{
		super(6);
		}

	/*
	getVertices(cx:number, cy:number, r:number):Array<Point>
		{
		const vertices = new Array<Point>();

		for (let i = 0; i < 6; i++)
			{
			const theta = i * (TWOPI / 6);

			const x = cx + r * Math.cos(theta);
			const y = cy + r * Math.sin(theta);

			vertices.push(new Point(x, y));
			}

		return vertices;
		}
	*/

	/*
	getSVG(cx:number, cy:number, r:number, fill:string = "none", stroke:string = "black"):string
		{
		const points = this.getVertices(cx, cy, r).map(p => `${p.x},${p.y}`).join(" ");

		return `<polygon points="${points}" fill="${fill}" stroke="${stroke}"/>`;
		}
	*/
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IPoint,
	Point,
	Polygon
	};
