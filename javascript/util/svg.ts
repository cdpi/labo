
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
	polygon
	};
