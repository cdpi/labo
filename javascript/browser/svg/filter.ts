
import { NAMESPACE } from "./constants.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
<feComponentTransfer in="foamNoise" result="bubblyNoise">
	<feFuncR type="gamma" exponent="2.5" />
	<feFuncG type="gamma" exponent="2.5" />
	<feFuncB type="gamma" exponent="2.5" />
</feComponentTransfer>

<feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" result="distort" />
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function svgElement<T extends SVGElement>(tagName:string, attributes?:{[key:string]:string}):T
	{
	const element:T = document.createElementNS(NAMESPACE, tagName) as T;

	if (attributes)
		{
		for (const [attribute, value] of Object.entries(attributes))
			{
			element.setAttribute(attribute, value);
			}
		}

	return element;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

enum Source
	{
	SourceGraphic,
	SourceAlpha
	}

type SourceName = Source | string;

type Input = SourceName;

type Output = SourceName;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type MorphologyOperator = "erode" | "dilate";

function feMorphology(input:Input, operator:MorphologyOperator, radius:number|string, output:Output):SVGFEMorphologyElement
	{
	const attributes:{[key:string]:string} =
		{
		operator,
		radius: radius.toString(),
		in: input.toString(),
		result: output.toString()
		};

	return svgElement<SVGFEMorphologyElement>("feMorphology", attributes);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type TurbulenceType = "fractalNoise" | "turbulence";

function feTurbulence(type:TurbulenceType, baseFrequency:number|string, numOctaves:number, output:Output):SVGFETurbulenceElement
	{
	const attributes:{[key:string]:string} =
		{
		type,
		baseFrequency: baseFrequency.toString(),
		numOctaves: numOctaves.toString(),
		result: output.toString()
		};

	return svgElement<SVGFETurbulenceElement>("feTurbulence", attributes);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//<feDisplacementMap in="morphology1" in2="turbulence" scale="44" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100%" result="displacementMap"/>

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ChannelSelector = "R" | "G" | "B" | "A";

function feDisplacementMap(input1:Input, input2:Input, scale:number|string, xChannelSelector:ChannelSelector, yChannelSelector:ChannelSelector, output:Output):SVGFEDisplacementMapElement
	{
	const attributes:{[key:string]:string} =
		{
		in: input1.toString(),
		in2: input2.toString(),
		scale: scale.toString(),
		xChannelSelector,
		yChannelSelector,
		result: output.toString()
		};

	return svgElement<SVGFEDisplacementMapElement>("feDisplacementMap", attributes);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
<filter id="filter" color-interpolation-filters="linearRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
	<feMorphology operator="dilate" radius="13 14" x="0%" y="0%" width="100%" height="100%" in="displacementMap" result="morphology1"/>
	<feTurbulence type="turbulence" baseFrequency="0.047 0.068" numOctaves="4" seed="1" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"/>
	<feDisplacementMap in="morphology1" in2="turbulence" scale="44" xChannelSelector="R" yChannelSelector="G" x="0%" y="0%" width="100%" height="100%" result="displacementMap"/>
</filter>
*/

// TODO: DisplacementMap pour ile pirate, mettre au bon endroit !!!!!!

function getFilterForPirateIsland(id:string, dilate:number, baseFrequency:number, scale:number):SVGFilterElement
	{
	const attributes:{[key:string]:string} =
		{
		id,
		colorInterpolationFilters: "linearRGB",
		filterUnits: "objectBoundingBox",
		primitiveUnits: "userSpaceOnUse"
		};

	const filter:SVGFilterElement = svgElement<SVGFilterElement>("filter", attributes);

	filter.appendChild(feMorphology("displacementMap", "dilate", dilate, "morphology"));

	//const turbulence:SVGFETurbulenceElement = feTurbulence("turbulence", "0.047 0.068", 4, "turbulence");
	//turbulence.setAttribute("seed", "1");
	//turbulence.setAttribute("stitchTiles", "noStitch");
	//filter.appendChild(turbulence);
	filter.appendChild(feTurbulence("turbulence", baseFrequency, 4, "turbulence"));

	//const displacementMap:SVGFEDisplacementMapElement = feDisplacementMap("morphology1", "turbulence", 44, "R", "G", "displacementMap");
	//filter.appendChild(displacementMap);
	filter.appendChild(feDisplacementMap("morphology", "turbulence", scale, "R", "G", "displacementMap"));
	
	return filter;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	MorphologyOperator,
	feMorphology,

	TurbulenceType,
	feTurbulence,

	ChannelSelector,
	feDisplacementMap,

	getFilterForPirateIsland
	};
