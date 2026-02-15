
//import { getFilesAndDirectories, getFilesRecursively } from "./io.js";
//import { concat } from "./util/util.js";

import { downloadNotoEmoji } from "../emoji/noto.js";
import { toBezier } from "../geometry/line.js";
import { IPoint, Point, pointsToString } from "../geometry/point.js";
import { Modifier, Polygon, randomRadiusModifier, waveRadiusModifier } from "../geometry/polygon.js";
import { CurveTo, MoveTo } from "../web/svg.js";

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

function devSVG():void
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

function devBezier():void
	{
	const points:Array<IPoint> = toBezier(new Point(10, 10), new Point(50, 50), 0.9);

	const path:string = MoveTo(points[0]) + " " + CurveTo(points[1], points[2], points[3]);

	const svg:string = "<svg viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><path d='" + path + "' stroke='black' fill='transparent'/></svg>";

	console.log(svg);
	}

//devEmoji();
//devSVG();
devBezier();
