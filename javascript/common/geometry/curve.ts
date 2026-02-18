
import { IPoint, Point } from "./point.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Curve
	{
	public static getControlPoints(before:IPoint, from:IPoint, to:IPoint, after:IPoint, tension:number):Array<IPoint>
		{
		const x1:number = from.x + (to.x - before.x) * tension;
		const y1:number = from.y + (to.y - before.y) * tension;
		
		const x2:number = to.x - (after.x - from.x) * tension;
		const y2:number = to.y - (after.y - from.y) * tension;

		return new Array<IPoint>(new Point(x1, y1), new Point(x2, y2));
		}

	/*
	public static toBezier(from:IPoint, to:IPoint, tension:number):Array<IPoint>
		{
		const dx:number = to.x - from.x;
		const dy:number = to.y - from.y;

		const controlPointFrom:IPoint = new Point(from.x + dx * tension, from.y);
		const controlPointTo:IPoint = new Point(to.x - dy * tension, to.y);

		return new Array<IPoint>(from, controlPointFrom, controlPointTo, to);
		}
	*/
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Curve
	};
