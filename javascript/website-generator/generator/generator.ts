
import { IWebSite } from "#website-generator/generator/website.js";
import { IEngine } from "#website-generator/engine/engine.js";

import { NunjucksEngine } from "#website-generator/engine/nunjucks.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IGenerator<T extends IWebSite>
	{
	run():void;
	}

class Generator<T extends IWebSite> implements IGenerator<T>
	{
	private readonly engine:IEngine<object, string>;

	public constructor()
		{
		this.engine = new NunjucksEngine();
		}

	public run():void
		{
		const html:string = this.engine.getRenderer("page.njk").render({title: "OK"});
		console.log(html);
		//console.debug(this);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Generator
	};
