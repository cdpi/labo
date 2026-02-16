
import { IRenderer } from "#website-generator/engine/renderer.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IEngine<T, R>
	{
	getRenderer():IRenderer<T, R>;
	getRenderer(template:string):IRenderer<T, R>;
	}

abstract class Engine<T, R> implements IEngine<T, R>
	{
	abstract getRenderer():IRenderer<T, R>;
	abstract getRenderer(template:string):IRenderer<T, R>;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IEngine,
	Engine
	};
