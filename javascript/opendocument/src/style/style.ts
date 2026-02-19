
import "reflect-metadata";
import { Expose } from "class-transformer";

class Style
	{
	@Expose({ name: "@_style:name" })
	name?:string;
	};

export
	{
	Style
	};
