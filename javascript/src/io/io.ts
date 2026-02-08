
import { Stats, readdir, readdirSync, readFileSync, statSync, openSync, readSync, closeSync } from "node:fs";
import { FileHandle, open } from "node:fs/promises";
import { join } from "node:path";

type Options =
	{
	directory?:string;
	sort?:boolean;
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type FilesAndDirectories =
	{
	files:Array<string>;
	directories:Array<string>;
	};

function getFilesAndDirectories(options:Options):FilesAndDirectories
	{
	const files:Array<string> = new Array<string>();
	const directories:Array<string> = new Array<string>();

	const directory:string = options.directory ?? ".";

	const paths:Array<string> = readdirSync(directory);

	paths.forEach((path:string) =>
		{
		const currentPath:string = join(directory, path);
		const stat:Stats = statSync(currentPath);

		if (stat.isFile())
			{
			files.push(currentPath);
			}
		else if (stat.isDirectory())
			{
			directories.push(currentPath);
			}
		});

	if (options.sort === true)
		{
		files.sort();
		directories.sort();
		}

	return { files, directories };
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getFilesRecursively(directory:string):Array<string>
	{
	let allFiles:Array<string> = new Array<string>();

	walkFilesRecursively(directory, (file:string) => allFiles.push(file));

	return allFiles;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type ReadCallback<T> = (file:number) => T;

function read<T>(path:string, callback:ReadCallback<T>):T
	{
	let file:number|null = null;

	try
		{
		file = openSync(path, "r");

		return callback(file);
		}
	finally
		{
		if (file !== null)
			{
			closeSync(file);
			}
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function readBytes(path:string, count:number):Promise<Buffer>
	{
	let file:FileHandle|null = null;

	try
		{
		file = await open(path, "r");

		const { buffer } = await file.read(Buffer.alloc(count), 0, count, 0);

		return buffer;
		}
	//catch (error:any)
	//throw new Error(`Erreur lors de la lecture du fichier : ${error.message}`);
	finally
		{
		if (file)
			{
			await file.close();
			}
		}
	}

function readBytes2(path:string, count:number):Buffer
	{
	return read(path, (file:number) =>
		{
		const buffer:Buffer = Buffer.alloc(count);

		readSync(file, buffer, 0, count, 0);

		return buffer;
		});
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type WalkFilesRecursivelyCallback = (path:string) => void;

function walkFilesRecursively(directory:string, callback:WalkFilesRecursivelyCallback):void
	{
	let paths:Array<string> = readdirSync(directory);

	paths = paths.sort();

	paths.forEach((path:string) =>
		{
		const stat:Stats = statSync(path);
		});

	readdirSync(directory).sort().forEach((file:string) =>
		{
		const path:string = join(directory, file);
		const stat:Stats = statSync(path);

		if (stat.isFile())
			{
			callback(path);
			}
		else if (stat.isDirectory())
			{
			walkFilesRecursively(path, callback);
			}
		});
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
type ReadTextFilesRecursivelyCallback = (path:string, content:string) => void;

function readTextFilesRecursively(directory:string, callback:ReadTextFilesRecursivelyCallback):void
	{
	getFilesRecursively(directory).forEach((file:string) => callback(file, readFileSync(file, "utf-8")));
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Options,
	FilesAndDirectories,
	getFilesAndDirectories,
	getFilesRecursively,
	readBytes,
	WalkFilesRecursivelyCallback,
	walkFilesRecursively
	};
