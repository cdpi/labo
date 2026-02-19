
import "reflect-metadata";
import { Expose, Type } from "class-transformer";

import { FontFace } from "../style/font-face.js";

class FontFaceDecls
	{
	@Expose({ name: "style:font-face" })
	@Type(() => FontFace)
	font?:FontFace;
	}

export
	{
	FontFaceDecls
	};
