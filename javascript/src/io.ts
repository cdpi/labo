
import { type Stats, readdir, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

type Options =
	{
	directory?:string,
	sort?:boolean
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Options
	};
