
import { IPoint } from "../geometry.js";
import { NAMESPACE } from "./constants.js";
import { pointsToString } from "./util.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function polygon(points:Array<IPoint>, fill:string = "none", stroke:string = "black"):SVGPolygonElement
	{
	const polygon:SVGPolygonElement = document.createElementNS(NAMESPACE, "polygon") as SVGPolygonElement;

	polygon.setAttribute("points", pointsToString(points));
	polygon.setAttribute("fill", fill);
	polygon.setAttribute("stroke", stroke);

	//polygon.isPointInFill(new DOMPoint(0, 0));

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
