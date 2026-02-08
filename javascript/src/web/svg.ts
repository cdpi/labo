

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SVG
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

//function pointsToPolygon(points:Array<Point>):SVGPolygonElement
function pointsToPolygon():void
	{
	//const polygon = document.createElementNS(SVG_NAMESPACE, "polygon") as SVGPolygonElement;
	//polygon.setAttribute("points", pointsToString(points));
	//return polygon;
	}

//function getPolygons(grid:Grid):Array<SVGPolygonElement>
function getPolygons():void
	{
	//return grid.getRandomPolygons().flatMap(polygon => polygon.flatMap(pointsToPolygon));

	/*
	return grid.getRandomPolygons().flatMap(polygon => polygon.flatMap(points =>
		{
		const element = document.createElementNS(NS, "polygon") as SVGPolygonElement;

		element.setAttribute("points", pointsToString(points));

		return element;
		}));
	*/
	}
