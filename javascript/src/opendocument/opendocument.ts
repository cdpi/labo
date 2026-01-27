
import { plainToInstance } from "class-transformer";
import { XMLParser } from "fast-xml-parser";

import { DocumentContent } from "./office/document-content.js";

function parseContentXML(xml:string):DocumentContent
	{
	const parser = new XMLParser({ignoreAttributes: false, attributeNamePrefix: "@_"});

	const raw = parser.parse(xml);

	return plainToInstance(DocumentContent, raw["office:document-content"], {excludeExtraneousValues: true});
	}

export
	{
	parseContentXML
	};
