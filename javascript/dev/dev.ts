
//import { getFilesAndDirectories, getFilesRecursively } from "./io.js";
//import { concat } from "./util/util.js";

import { downloadNotoEmoji } from "#util/emoji/noto.js";
import { IPoint, pointsToString } from "#util/geometry/point.js";
import { Modifier, Polygon, randomRadiusModifier, waveRadiusModifier } from "#util/geometry/polygon.js";
import { polygonToPath } from "#util/svg/path.js";

function devIO():void
	{
	//const directory:string = process.argv[2] || ".";
	//const directory:string = "./test-concat";
	//console.log(getFilesAndDirectories({directory, sort: true}));
	//console.log(getFilesRecursively(directory));
	}

function devEmoji():void
	{
	downloadNotoEmoji("🙋🏻‍♂️").then((svg:string) =>
		{
		console.log(svg);
		});
	}

function devSVGsssss():void
	{
	const polygon:Polygon = new Polygon(120);

	const randomModifier:Modifier = randomRadiusModifier(70, 90);
	const waveModifier:Modifier = waveRadiusModifier();

	const radiusModifier:Modifier = (r:number, angle:number, index:number) =>
		{
		let radius:number = r;

		radius = waveModifier(radius, angle, index);
		radius = randomModifier(radius, angle, index);

		return radius;
		};

	const points:Array<IPoint> = polygon.getVertices(100, 100, 80, radiusModifier);

	const svg:string = "<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><polygon points='" + pointsToString(points) + "' fill='white' stroke='black'/></svg>";

	console.log(svg);
	}

//<path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>

/*
function devBezier():void
	{
	const points:Array<IPoint> = toBezier(new Point(10, 10), new Point(50, 50), 0.9);

	const path:string = MoveTo(points[0]) + " " + CurveTo(points[1], points[2], points[3]);

	const svg:string = "<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><path d='" + path + "' stroke='black' fill='transparent'/></svg>";

	console.log(svg);
	}
*/

function svgPath():void
	{
	const polygon:Polygon = new Polygon(18);

	const points:Array<IPoint> = polygon.getVertices(100, 100, 75, randomRadiusModifier(60, 90));

	const path:string = polygonToPath(points, 0.2);

	const water:string = `<rect x="0" y="0" width="200" height="200" fill="lightblue" stroke="none"/>`;
	//const a:string = `<polygon points="${pointsToString(points)}" fill="transparent" stroke="gray"/>`;
	const island:string = `<path d="${path}" fill="#BFA78A" stroke="maroon"/>`;

	const svg:string = `<svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>${water}${island}</svg>`;

	console.log(svg);
	}

function devSVG():void
	{
	svgPath();
	}

//devEmoji();
devSVG();
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
