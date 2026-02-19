
import "reflect-metadata";
import { Expose, Type } from "class-transformer";

import { AutomaticStyles } from "./automatic-styles.js";
import { Body } from "./body.js";
import { FontFaceDecls } from "./font-face-decls.js";

class DocumentContent
	{
	@Expose({ name: "@_office:version" })
	@Type(() => Number)
	version?:number;

	@Expose({ name: "office:font-face-decls" })
	@Type(() => FontFaceDecls)
	fonts?:FontFaceDecls;

	@Expose({ name: "office:automatic-styles" })
	@Type(() => AutomaticStyles)
	automaticStyles?:AutomaticStyles;

	@Expose({ name: "office:body" })
	@Type(() => Body)
	body?:Body;
	}

export
	{
	DocumentContent
	};
