
import { getRandom } from "../util/random.js";
import { TWOPI } from "./geometry.js";
import { IPoint, Point } from "./point.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Modifier = (radius:number, angle:number, index:number) => number;

function randomRadiusModifier(minimum:number, maximum:number):Modifier
	{
	return (r:number, angle:number, index:number) =>
		{
		return getRandom(minimum, maximum);
		};
	}

function waveRadiusModifier():Modifier
	{
	return (r:number, angle:number, index:number) =>
		{
		return r + (Math.sin(angle * 4) * 10);
		};
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Polygon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Polygon
	{
	public readonly n:number;

	constructor(n:number)
		{
		this.n = n;
		}

	public getVertices(cx:number, cy:number, r:number, modifier?:Modifier):Array<IPoint>
		{
		const vertices:Array<IPoint> = new Array<IPoint>();

		const step:number = TWOPI / this.n;

		for (let i = 0; i < this.n; i++)
			{
			const angle:number = i * step;

			let radius:number = r;

			if (modifier)
				{
				radius = modifier(r, angle, i);
				}

			const x = cx + Math.cos(angle) * radius;
			const y = cy + Math.sin(angle) * radius;

			vertices.push(new Point(x, y));
			}

		return vertices;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Modifier,
	randomRadiusModifier,
	waveRadiusModifier,
	Polygon
	};
