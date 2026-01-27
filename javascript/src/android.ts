
import { readFileSync } from "node:fs";

const FILENAME_APPFILTER = "appfilter.xml";
const FILENAME_DRAWABLE = "drawable.xml";

function toDrawableName(text:string):string
	{
	return `ic_${text.toLowerCase().replace(/[^a-z0-9]/g, "_")}`;
	}

type ParseCallback = (name:string, pkg:string, activity:string) => void;

function parse(path:string, callback:ParseCallback):void
	{
	const csv = readFileSync(path, "utf-8");
	const lines = csv.trim().split("\n").sort();

	lines.forEach(line =>
		{
		const [name, pkg, activity] = line.split(",").map(s => s?.trim());

		if (name && pkg && activity)
			{
			callback(name, pkg, activity);
			}
		});
	}

function csvToAppFilter(path:string):string
	{
	const xml:Array<string> = new Array<string>();

	xml.push(`<?xml version="1.0" encoding="utf-8"?>`);
	xml.push(`<resources>`);

	parse(path, (name:string, pkg:string, activity:string) =>
		{
		const drawableName = toDrawableName(name);

		xml.push(`\t<item component="ComponentInfo{${pkg}/${activity}}" drawable="${drawableName}" />`);
		});

	xml.push(`</resources>`);

	return xml.join("\n");
	}

function csvToDrawable(path:string):string
	{
	const xml:Array<string> = new Array<string>();

	xml.push(`<?xml version="1.0" encoding="utf-8"?>`);
	xml.push(`<resources>`);

	parse(path, (name:string, pkg:string, activity:string) =>
		{
		const drawableName = toDrawableName(name);

		xml.push(`\t<item drawable="${drawableName}" />`);
		});

	xml.push(`</resources>`);

	return xml.join("\n");
	}

export
	{
	FILENAME_APPFILTER,
	FILENAME_DRAWABLE,
	toDrawableName,
	ParseCallback,
	parse,
	csvToAppFilter,
	csvToDrawable
	};
