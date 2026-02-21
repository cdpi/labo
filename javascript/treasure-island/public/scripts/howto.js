
import { setActiveStyleSheet } from "@cdpi/css/theme.js";

import { Polygon, getRandomRadiusModifier } from "common/geometry/polygon.js";

const points = new Polygon(12).getVertices(50, 50, 45);
//console.log(points);

const xy = points.map(point => `${point.x.toFixed(2)},${point.y.toFixed(2)}`).join(" ");
//console.log(xy);

//const s = document.querySelector("#polypoly");
//console.log(s);

document.querySelector("#light-theme").addEventListener("click", () => setActiveStyleSheet("Clair"));
document.querySelector("#dark-theme").addEventListener("click", () => setActiveStyleSheet("Sombre"));

document.querySelector("#howto-water-color").addEventListener("click", () =>
	{
	document.querySelectorAll("svg").forEach(svg =>
		{
		svg.classList.toggle("aaa");
		});
	});
