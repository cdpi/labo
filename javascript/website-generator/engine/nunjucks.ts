
import nunjucks from "nunjucks";

import { Engine } from "#website-generator/engine/engine.js";
import { IRenderer, Renderer } from "#website-generator/engine/renderer.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class NunjucksRenderer extends Renderer<object, string>
	{
	private readonly template:nunjucks.Template;

	public constructor(template:nunjucks.Template)
		{
		super();

		this.template = template;
		}

	public render(model:object|null = null):string
		{
		return this.template.render(model || {});
		}
	}

class NunjucksEngine extends Engine<object, string>
	{
	private readonly environment:nunjucks.Environment;

	constructor(templatesDirectory:string = "templates")
		{
		super();

		this.environment = nunjucks.configure(templatesDirectory, {autoescape: true, throwOnUndefined: true});
		}

	public getRenderer(template:string|null = null):IRenderer<object, string>
		{
		if (template === null)
			{
			throw new Error("TODO: renderer without template");
			}

		const tpl = this.environment.getTemplate(template);

		return new NunjucksRenderer(tpl);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	NunjucksEngine
	};
