
//import { NAMESPACE as SVG_NAMESPACE } from "#util/svg/constants.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const bind = <T extends Element>(input:HTMLInputElement, element:T, attribute:string):void =>
	{
	input.addEventListener("input", (event:Event) => element.setAttribute(attribute, input.value));
	};

/*
const bindNS = <T extends Element>(input:HTMLInputElement, namespace:string, element:T, attribute:string):void =>
	{
	input.addEventListener("input", (event:Event) => element.setAttributeNS(namespace, attribute, input.value));
	};

const bindSVG = <T extends SVGElement>(input:HTMLInputElement, element:T, attribute:string) => bindNS(input, SVG_NAMESPACE, element, attribute);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Helpers

// TODO: Fonctionne avec setAttribute mais pas avec setAttributeNS ?????????????

//const bindMorphology = (input:HTMLInputElement, element:SVGFEMorphologyElement, attribute:string) => bindSVG(input, element, attribute);
const bindTurbulence = (input:HTMLInputElement, element:SVGFETurbulenceElement, attribute:string) => bind(input, element, attribute);
const bindDisplacementMap = (input:HTMLInputElement, element:SVGFEDisplacementMapElement, attribute:string) => bind(input, element, attribute);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Helpers encore plus

//<feMorphology operator="dilate" radius="13 14" x="0%" y="0%" width="100%" height="100%" in="displacementMap" result="morphology1"/>

// Et les limites commencent... 2 valeurs !!
const bindMorphologyRadius = (x:HTMLInputElement, y:HTMLInputElement, element:SVGFEMorphologyElement):void =>
	{
	const onInput = ():void =>
		{
		const value:string = `${x.value} ${y.value}`;

		//element.setAttributeNS(SVG_NAMESPACE, "radius", value);
		element.setAttribute("radius", value);
		};

	x.addEventListener("input", onInput);
	y.addEventListener("input", onInput);
	};

//<feTurbulence type="turbulence" baseFrequency="0.047 0.068" numOctaves="4" seed="1" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"/>

// Et les limites continuent... 2 valeurs !!
const bindTurbulenceBaseFrequency = (x:HTMLInputElement, y:HTMLInputElement, element:SVGFETurbulenceElement):void =>
	{
	const onInput = ():void =>
		{
		const value:string = `${x.value} ${y.value}`;

		//element.setAttributeNS(SVG_NAMESPACE, "baseFrequency", value);
		element.setAttribute("baseFrequency", value);
		};

	x.addEventListener("input", onInput);
	y.addEventListener("input", onInput);
	};

const bindTurbulenceOctaves = (input:HTMLInputElement, element:SVGFETurbulenceElement):void => bindTurbulence(input, element, "numOctaves");
const bindTurbulenceSeed = (input:HTMLInputElement, element:SVGFETurbulenceElement):void => bindTurbulence(input, element, "seed");

//<feDisplacementMap in="morphology1" in2="turbulence" scale="44" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100%" result="displacementMap"/>

const bindDisplacementMapScale = (input:HTMLInputElement, element:SVGFEDisplacementMapElement):void => bindDisplacementMap(input, element, "scale");
//const bindDisplacementMapChannelSelector = (input:HTMLInputElement, element:SVGFEDisplacementMapElement):void => bindDisplacementMap(input, element, "scale");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Helper encore plus plus plus plus

type IslandBindings =
	{
	morphology:
		{
		element:SVGFEMorphologyElement;
		radius:
			{
			x:HTMLInputElement;
			y:HTMLInputElement;
			}
		}
	turbulence:
		{
		element:SVGFETurbulenceElement;
		baseFrequency:
			{
			x:HTMLInputElement;
			y:HTMLInputElement;
			}
		octaves:HTMLInputElement;
		seed:HTMLInputElement;
		}
	displacementMap:
		{
		element:SVGFEDisplacementMapElement;
		scale:HTMLInputElement;
		}
	};

const bindIsland = (bindings:IslandBindings):void =>
	{
	const morphology = bindings.morphology;
	bindMorphologyRadius(morphology.radius.x, morphology.radius.y, morphology.element);

	const turbulence = bindings.turbulence;
	bindTurbulenceBaseFrequency(turbulence.baseFrequency.x, turbulence.baseFrequency.y, turbulence.element);
	bindTurbulenceOctaves(turbulence.octaves, turbulence.element);
	bindTurbulenceSeed(turbulence.seed, turbulence.element);

	const displacementMap = bindings.displacementMap;
	bindDisplacementMapScale(displacementMap.scale, displacementMap.element);
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IslandBindings,
	bindIsland
	};
