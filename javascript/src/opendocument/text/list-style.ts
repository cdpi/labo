
import "reflect-metadata";
import { Expose, Type } from "class-transformer";

import { Style } from "../style/style.js";
import { ListLevelStyleBullet } from "./list-level-style-bullet.js";

class ListStyle extends Style
	{
	@Expose({ name: "text:list-level-style-bullet" })
	@Type(() => ListLevelStyleBullet)
	listLevelStyleBullet?:Array<ListLevelStyleBullet>;
	};

export
	{
	ListStyle
	};
