
import { IPoint } from "#common/geometry/point.js";
import { Polygon, getRandomRadiusModifier } from "#common/geometry/polygon.js";
//import { polygonToPath } from "#geometry/polygon.js";
//import { pointsToString } from "#util/svg/util.js";

//import { getFilterForPirateIsland } from "../../util/svg/filter.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Todo créée et marquée complétée — voici des couleurs web pour du sable de plage :

Sable très clair : #F4E7D3 — rgb(244,231,211)
Sable doré : #EFD6A2 — rgb(239,214,162)
Sable chaud : #E6C89E — rgb(230,200,158)
Sable humide (plus sombre) : #CFC1A6 — rgb(207,193,166)
Dune naturelle : #BFA78A — rgb(191,167,138)
Coquillage (accent rosé) : #F2DFD7 — rgb(242,223,215)
Usage rapide :

Fond clair : #F4E7D3 ou #F2DFD7.
Accent / ombre : #CFC1A6 ou #BFA78A.
Souhaitez-vous un ensemble CSS (variables) ou une palette exportable (ASE/JSON) ?
*/

function newIslandGetPolygonPoints(size:number, count:number):Array<IPoint>
	{
	const radius:number = Math.floor(size * 0.75);
	const minimum:number = Math.floor(size * 0.6);
	const maximum:number = Math.floor(size * 0.9);

	const polygon:Polygon = new Polygon(count);

	return polygon.getVertices(size, size, radius, getRandomRadiusModifier(minimum, maximum));
	}

function newIslandGetCurvedPath(points:Array<IPoint>, tension:number):string
	{
	return polygonToPath(points, tension);
	}

function newIslandOriginalPolygonSVG(points:Array<IPoint>):string
	{
	return `<polygon points="${pointsToString(points)}" fill="none" stroke="black"/>`;
	}

function newIslandWaterSVG(width:number, height:number):string
	{
	return `<rect x="0" y="0" width="${width}" height="${height}" fill="lightblue" stroke="none"/>`;
	}

function newIslandIslandSVG(path:string):string
	{
	//return `<path d="${path}" fill="#E6C89E" stroke="#BFA78A" stroke-width="40"/>`;
	return `<path d="${path}" fill="#BFA78A" stroke="none" filter="url(#pirateIslandFilter)"/>`;
	}

function newIslandSVG(width:number, height:number, count:number, scale:number, smoothness:number, showOriginalPolygon:boolean):string
	{
	const size:number = Math.floor(Math.min(width, height) / 2);

	const water:string = newIslandWaterSVG(width, height);

	const points:Array<IPoint> = newIslandGetPolygonPoints(size, count);

	const polygon:string = newIslandOriginalPolygonSVG(points);

	const originalPolygon:string = showOriginalPolygon ? polygon : "";

	const path:string = newIslandGetCurvedPath(points, smoothness);

	const filter:string = getFilterForPirateIsland("pirateIslandFilter", 10, 0.05, scale).outerHTML;

	const island:string = newIslandIslandSVG(path);

	const svg:string = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
	${filter}
	${water}
	${island}
	${originalPolygon}
</svg>`;

	return svg;
	}

const DEFAULT_COUNT:number = 12;
const DEFAULT_SMOOTHNESS:number = 0.2;
const DEFAULT_SCALE:number = 40;

function newIsland(width:number, height:number, count:number = DEFAULT_COUNT, scale:number = DEFAULT_SCALE, smoothness:number = DEFAULT_SMOOTHNESS, showOriginalPolygon:boolean = false):string
	{
	return newIslandSVG(width, height, count, scale, smoothness, showOriginalPolygon);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	newIsland
	};
