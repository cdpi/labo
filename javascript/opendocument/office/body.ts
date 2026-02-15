
import "reflect-metadata";
import { Expose, Type } from "class-transformer";

import { Text } from "./text.js";

class Body
	{
	@Expose({ name: "office:text" })
	@Type(() => Text)
	text?:Text;

	isText():boolean
		{
		return !!this.text;
		}
	}

export
	{
	Body
	};
