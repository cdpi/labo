
import { IPoint, pointsToString } from "./geometry/point.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SVG
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

function polygon(points:Array<IPoint>, fill:string = "none", stroke:string = "black"):SVGPolygonElement
	{
	const polygon:SVGPolygonElement = document.createElementNS(SVG_NAMESPACE, "polygon") as SVGPolygonElement;

	polygon.setAttribute("points", pointsToString(points));
	polygon.setAttribute("fill", fill);
	polygon.setAttribute("stroke", stroke);

	return polygon;
	}

const pointToString = (point:IPoint):string => `${point.x} ${point.y}`;

const MoveTo = (point:IPoint):string => `M${pointToString(point)}`;

const CurveTo = (controlPointFrom:IPoint, controlPointTo:IPoint, to:IPoint):string =>
	{
	return `C${pointToString(controlPointFrom)}, ${pointToString(controlPointTo)}, ${pointToString(to)}`;
	};

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

class _MoveTo extends Command
	{
	type:Type = "M";
	}

/*
function getPolygons():void
	{
	//return grid.getRandomPolygons().flatMap(polygon => polygon.flatMap(pointsToPolygon));

	return grid.getRandomPolygons().flatMap(polygon => polygon.flatMap(points =>
		{
		const element = document.createElementNS(NS, "polygon") as SVGPolygonElement;

		element.setAttribute("points", pointsToString(points));

		return element;
		}));
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	polygon,
	MoveTo,
	CurveTo
	};
