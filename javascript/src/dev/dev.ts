
//import { getFilesAndDirectories, getFilesRecursively } from "./io.js";
//import { concat } from "./util/util.js";

import { downloadNotoEmoji } from "../emoji/noto.js";

function devIO():void
	{
	//const directory:string = process.argv[2] || ".";
	//const directory:string = "./test-concat";
	//console.log(getFilesAndDirectories({directory, sort: true}));
	//console.log(getFilesRecursively(directory));
	}

function devEmoji():void
	{
	downloadNotoEmoji("🙋🏻‍♂️").then((svg:string) =>
		{
		console.log(svg);
		});
	}

//devEmoji();
