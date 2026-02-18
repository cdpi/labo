
import { getRandom } from "../util/random.js";
import { TWOPI } from "./constants.js";
import { IPoint, Point } from "./point.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type RadiusModifier = (radius:number, angle:number, index:number) => number;

function getRandomRadiusModifier(minimum:number, maximum:number):RadiusModifier
	{
	return (radius:number, angle:number, index:number) =>
		{
		return getRandom(minimum, maximum);
		};
	}

function getWaveRadiusModifier():RadiusModifier
	{
	return (radius:number, angle:number, index:number) =>
		{
		return radius + (Math.sin(angle * 4) * 10);
		};
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Polygon
	{
	public readonly n:number;

	constructor(n:number)
		{
		this.n = n;
		}

	public getVertices(cx:number, cy:number, radius:number, modifier:RadiusModifier|null = null):Array<IPoint>
		{
		const vertices:Array<IPoint> = new Array<IPoint>();

		const step:number = TWOPI / this.n;

		for (let i = 0; i < this.n; i++)
			{
			const angle:number = i * step;

			let newRadius:number = radius;

			if (modifier)
				{
				newRadius = modifier(newRadius, angle, i);
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
	RadiusModifier,
	getRandomRadiusModifier,
	getWaveRadiusModifier,

	Polygon
	};
