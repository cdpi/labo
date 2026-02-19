
import "reflect-metadata";
import { Expose, Type } from "class-transformer";

import { ListStyle } from "../text/list-style.js";

class AutomaticStyles
	{
	@Expose({ name: "text:list-style" })
	@Type(() => ListStyle)
	listStyle?:ListStyle;
	};

export
	{
	AutomaticStyles
	};
