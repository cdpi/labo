
import { IWebSite } from "#website-generator/generator/website.js";
import { IEngine } from "#website-generator/engine/engine.js";
import { NunjucksEngine } from "#website-generator/engine/nunjucks.js";
import { PandocEngine } from "#website-generator/engine/pandoc.js";
import { IRenderer } from "#website-generator/engine/renderer";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IFile
	{
	}

interface IProcessor
	{
	}

interface IFileProcessor extends IProcessor
	{
	}

class MarkdownProcessor implements IFileProcessor
	{
	private readonly renderer:IRenderer<string, string>;

	public constructor()
		{
		this.renderer = new PandocEngine().getRenderer({inputFormat: "markdown", outputFormat: "html"});
		}

	public process(path:string):string
		{
		return this.renderer.render(path);
		}
	}

interface IGenerator<T extends IWebSite>
	{
	run():void;
	}

class Generator<T extends IWebSite> implements IGenerator<T>
	{
	private readonly engine:IEngine<object, string, string>;

	private readonly markdownToHTML:MarkdownProcessor;

	public constructor()
		{
		this.engine = new NunjucksEngine();

		this.markdownToHTML = new MarkdownProcessor();
		}

	public run():void
		{
		const content:string = this.markdownToHTML.process("../README.md");

		const html:string = this.engine.getRenderer("page.njk").render({title: "Labo", content});

		console.log(html);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Generator
	};
