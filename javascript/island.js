
//console.log("Island module loaded");

const island = document.querySelector("#island");

for (let x = 0; x < 200; x += 10)
	{
	for (let y = 0; y < 200; y += 10)
		{
		const point = new DOMPoint(x, y);

		if (island.isPointInFill(point))
			{
			const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");

			dot.setAttribute("cx", x);
			dot.setAttribute("cy", y);
			dot.setAttribute("r", 2);
			dot.setAttribute("fill", "black");

			document.documentElement.appendChild(dot);
			}
		}
	}
