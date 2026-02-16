
import { IRenderer } from "#website-generator/engine/renderer.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IEngine<T, U, R>
	{
	getRenderer(options:U):IRenderer<T, R>;

	render(options:U, model:T):R;
	}

abstract class Engine<T, U, R> implements IEngine<T, U, R>
	{
	abstract getRenderer(options:U):IRenderer<T, R>;

	public render(options:U, model:T):R
		{
		return this.getRenderer(options).render(model);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IEngine,
	Engine
	};
