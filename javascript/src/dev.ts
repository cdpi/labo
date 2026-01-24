
import { getFilesAndDirectories } from "./io.js";
//import { concat } from "./util/util.js";

//const directory:string = process.argv[2] || ".";
//const directory:string = "~/Documents/Projets/CDPI/odyssee/test-concat";
//             /home/thefab/Documents/Projets/CDPI/odyssee/test-concat

//console.log(directory);

//console.log(getFilesAndDirectories({ directory, sort:true }));

console.log(getFilesAndDirectories({directory: ".", sort: true}));
