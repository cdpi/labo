
import { getFilesAndDirectories, getFilesRecursively } from "./io.js";
//import { concat } from "./util/util.js";

//const directory:string = process.argv[2] || ".";
const directory:string = "./test-concat";

console.log(getFilesAndDirectories({directory, sort: true}));

//console.log(getFilesRecursively(directory));
