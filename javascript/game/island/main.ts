
import { type IslandBindings, bindIsland } from "./direct.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const bindings:IslandBindings =
	{
	morphology:
		{
		element: document.querySelector("#morphology") as SVGFEMorphologyElement,
		radius:
			{
			x: document.querySelector("#morphology-radius-x") as HTMLInputElement,
			y: document.querySelector("#morphology-radius-y") as HTMLInputElement
			}
		},
	turbulence:
		{
		element: document.querySelector("#turbulence") as SVGFETurbulenceElement,
		baseFrequency:
			{
			x: document.querySelector("#turbulence-base-frequency-x") as HTMLInputElement,
			y: document.querySelector("#turbulence-base-frequency-y") as HTMLInputElement
			},
		octaves: document.querySelector("#turbulence-octaves") as HTMLInputElement,
		seed: document.querySelector("#turbulence-seed") as HTMLInputElement
		},
	displacementMap:
		{
		element: document.querySelector("#displacement-map") as SVGFEDisplacementMapElement,
		scale: document.querySelector("#displacement-map-scale") as HTMLInputElement
		}
	};

bindIsland(bindings);
