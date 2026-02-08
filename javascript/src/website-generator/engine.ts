
import { Environment } from "nunjucks";

interface IRenderer<T>
	{
	render():T;
	render(model:object):T;
	}

interface IEngine<T>
	{
	getRenderer():IRenderer<T>;
	getRenderer(template:string):IRenderer<T>;
	}

class Engine implements IEngine<string>
	{
	private readonly environment:Environment;

	constructor(environment:Environment)
		{
		this.environment = environment;
		}

	getRenderer(template:string|null = null):IRenderer<string>
		{
		if (template === null)
			{
			throw new Error("TODO: renderer without template");
			}

		const tpl = this.environment.getTemplate(template);

		const renderer:IRenderer<string> =
			{
			render(model:object = {}):string
				{
				return tpl.render(model);
				}
			};

		return renderer;
		}
	}

export
	{
	IRenderer,
	IEngine,
	Engine
	};
