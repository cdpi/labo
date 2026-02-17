
import { IPoint, Polygon } from "#util/geometry.js";
import { randomRadiusModifier } from "#util/geometry/polygon.js";
import { polygonToPath } from "#util/svg.js";

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

export function svgIsland():void
	{
	const polygon:Polygon = new Polygon(18);

	const points:Array<IPoint> = polygon.getVertices(100, 100, 75, randomRadiusModifier(60, 90));

	const path:string = polygonToPath(points, 0.2);

	const water:string = `<rect x="0" y="0" width="200" height="200" fill="lightblue" stroke="none"/>`;
	const island:string = `<path d="${path}" fill="#BFA78A" stroke="maroon"/>`;

	const svg:string = `<svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
	${water}
	${island}
</svg>`;

	console.log(svg);
	}
