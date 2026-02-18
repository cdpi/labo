
import "reflect-metadata";
import { Expose, Type } from "class-transformer";

class ListLevelStyleBullet
	{
	@Expose({ name: "@_text:level" })
	@Type(() => Number)
	level:number;

	@Expose({ name: "@_text:style-name" })
	styleName:string;

	//@Expose({ name: "@_style:num-suffix" })
	//suffix:string;

	@Expose({ name: "@_text:bullet-char" })
	bullet:string;
	};

export
	{
	ListLevelStyleBullet
	};
