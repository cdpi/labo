
import { NAMESPACE } from "./constants.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fractalNoise(baseFrequency:number = 0.05, numOctaves:number = 4):SVGFETurbulenceElement
	{
	return turbulence("fractalNoise", baseFrequency, numOctaves);
	}

//	fractalNoise | turbulence
//<feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
class Turbulence
	{
	}

function turbulence(type:string = "fractalNoise", baseFrequency:number = 0.05, numOctaves:number = 4):SVGFETurbulenceElement
	{
	const turbulence:SVGFETurbulenceElement = document.createElementNS(NAMESPACE, "feTurbulence") as SVGFETurbulenceElement;

	turbulence.setAttribute("type", type);
	turbulence.setAttribute("baseFrequency", baseFrequency.toString());
	turbulence.setAttribute("numOctaves", numOctaves.toString());

	return turbulence;
	}

	/*
	<feTurbulence 
		type="fractalNoise" 
		baseFrequency="0.15" 
		numOctaves="5" 
		result="foamNoise" 
	/>

	<feComponentTransfer in="foamNoise" result="bubblyNoise">
		<feFuncR type="gamma" exponent="2.5" />
		<feFuncG type="gamma" exponent="2.5" />
		<feFuncB type="gamma" exponent="2.5" />
	</feComponentTransfer>

	<feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" result="distort" />*/
