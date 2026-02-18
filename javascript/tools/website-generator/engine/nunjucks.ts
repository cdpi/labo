
import nunjucks from "nunjucks";

import { Engine } from "./engine.js";
import { IRenderer, Renderer } from "./renderer.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class NunjucksRenderer extends Renderer<object, string>
	{
	private readonly template:nunjucks.Template;

	public constructor(template:nunjucks.Template)
		{
		super();

		this.template = template;
		}

	public render(model:object):string
		{
		return this.template.render(model);
		}
	}

class NunjucksEngine extends Engine<object, string, string>
	{
	private readonly environment:nunjucks.Environment;

	constructor(templatesDirectory:string = "templates")
		{
		super();

		this.environment = nunjucks.configure(templatesDirectory, {autoescape: true, throwOnUndefined: true});
		}

	public getRenderer(template:string):IRenderer<object, string>
		{
		const tpl = this.environment.getTemplate(template);

		return new NunjucksRenderer(tpl);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	NunjucksEngine
	};
