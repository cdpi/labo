
import { spawnSync } from "node:child_process";

import { Engine } from "#website-generator/engine/engine.js";
import { IRenderer } from "#website-generator/engine/renderer.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pandoc(path:string, inputFormat:Format, outputFormat:Format):string
	{
	//const result = spawnSync("pandoc", ["-f", inputFormat as string, "-t", outputFormat as string], {input: path, encoding: "utf-8"});
	const result = spawnSync("pandoc", ["-f", inputFormat as string, "-t", outputFormat as string, path], {encoding: "utf-8"});
		
	if (result.error)
		{
		throw result.error;
		}

	if (result.status !== 0)
		{
		throw new Error(`Pandoc failed with exit code ${result.status}: ${result.stderr}`);
		}

	return result.stdout;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Format = "markdown" | "html"; // | "docx" | "pdf";

type Options =
	{
	inputFormat:Format;
	outputFormat:Format;
	};

class PandocEngine extends Engine<string, Options, string>
	{
	constructor()
		{
		super();
		}

	public getRenderer(options:Options):IRenderer<string, string>
		{
		const renderer:IRenderer<string, string> =
			{
			render:(path:string) => pandoc(path, options.inputFormat, options.outputFormat)
			};

		return renderer;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Format,
	Options,
	PandocEngine
	};
