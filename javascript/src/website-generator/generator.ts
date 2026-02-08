
import { IWebSite } from "./website.js";

interface IGenerator<T extends IWebSite>
	{
	run():void;
	}

class Generator<T extends IWebSite> implements IGenerator<T>
	{
	run():void
		{
		console.debug(this);
		}
	}

export
	{
	IGenerator,
	Generator
	};
