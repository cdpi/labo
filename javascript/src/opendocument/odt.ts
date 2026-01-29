
import AdmZip from "adm-zip";

import { plainToInstance } from "class-transformer";
import { XMLParser } from "fast-xml-parser";
import { DocumentContent } from "./office/document-content.js";

// Dans io ou zip ;-)
function readFileInZip(path:string, file:string):string|null
	{
	const zip = new AdmZip(path);

	const entries = zip.getEntries();

	const entry:AdmZip.IZipEntry|null = zip.getEntry(file);

	if (entry !== null)
		{
		return zip.readAsText(entry);
		}

	return null;
	}

function readContentXML(path:string):string
	{
	const content = readFileInZip(path, "content.xml");

	if (content === null)
		{
		throw new Error("TODO: content.xml is null");
		}

	return content;
	}

//console.log(readContentXML("./tests/opendocument/1.zip"));

function getContentNamespaces(path:string):void
	{
	const parser = new XMLParser({ignoreAttributes: false, attributeNamePrefix: "@_"});

	const xml = readContentXML(path);

	const root = parser.parse(xml)["office:document-content"];

	//console.debug(root);

	for (const [key, value] of Object.entries(root))
		{
		if (key.startsWith("@_xmlns:"))
			{
			const prefix = key.replace("@_xmlns:", "");
			const url = value as string;

			//console.log(`prefix: ${prefix} --> url: ${url}`);
			console.log(`"${prefix}": "${url}",`);
			}

		//console.log(`key: ${key} : value: ${value}`);
		}
	}

//getContentNamespaces("./tests/opendocument/1.zip");

/*
function parseContentXML(xml: string): DocumentContent {
const parser = new XMLParser({
ignoreAttributes: false,
attributeNamePrefix: "@_"
});

const raw = parser.parse(xml);

// Normaliser les namespaces AVANT plainToInstance
const resolved = resolveNamespaces(raw);

return plainToInstance(
DocumentContent,
resolved["office:document-content"],
{ excludeExtraneousValues: true }
);
}

export { parseContentXML };
*/


// namespace-config.ts

/*
// Configuration centralisée : URI → préfixe canonique
const NAMESPACE_CONFIG = {
'http://monapp.com/text': 'text',
'http://monapp.com/office': 'office',
'http://example.com/custom': 'custom',
// Ajouter tous vos namespaces ici une seule fois
};
*/


/*
function resolveNamespaces(obj: any, nsContext: Record<string, string> = {}): any {
if (!obj || typeof obj !== 'object') return obj;

// Construire le contexte des namespaces depuis les attributs xmlns
const localNs = { ...nsContext };
for (const [key, value] of Object.entries(obj)) {
if (key.startsWith('@_xmlns:')) {
const prefix = key.replace('@_xmlns:', '');
localNs[prefix] = value as string;
}
}

const resolved: any = {};

for (const [key, value] of Object.entries(obj)) {
let resolvedKey = key;

// Si c'est un élément avec préfixe (pas un attribut)
if (key.includes(':') && !key.startsWith('@')) {
const [prefix, localName] = key.split(':');
const uri = localNs[prefix];

// Chercher le préfixe canonique pour cet URI
const canonicalPrefix = NAMESPACE_CONFIG[uri as keyof typeof NAMESPACE_CONFIG];
if (canonicalPrefix) {
resolvedKey = `${canonicalPrefix}:${localName}`;
}
}

// Récursif
resolved[resolvedKey] = Array.isArray(value)
? value.map(v => resolveNamespaces(v, localNs))
: resolveNamespaces(value, localNs);
}

return resolved;
}

//export { NAMESPACE_CONFIG, resolveNamespaces };
*/
