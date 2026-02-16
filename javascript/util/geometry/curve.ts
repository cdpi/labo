
import { IPoint, Point } from "./point.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Curve
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Curve
	{
	public static getControlPoints(point1:IPoint, point2:IPoint, point3:IPoint, point4:IPoint, tension:number):Array<IPoint>
		{
		const x1:number = point2.x + (point3.x - point1.x) * tension;
		const y1:number = point2.y + (point3.y - point1.y) * tension;
		
		const x2:number = point3.x - (point4.x - point2.x) * tension;
		const y2:number = point3.y - (point4.y - point2.y) * tension;

		return new Array<IPoint>(new Point(x1, y1), new Point(x2, y2));
		}

	public static toBezier(from:IPoint, to:IPoint, tension:number):Array<IPoint>
		{
		const dx:number = to.x - from.x;
		const dy:number = to.y - from.y;

		const controlPointFrom:IPoint = new Point(from.x + dx * tension, from.y);
		const controlPointTo:IPoint = new Point(to.x - dy * tension, to.y);

		return new Array<IPoint>(from, controlPointFrom, controlPointTo, to);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Curve
	};
