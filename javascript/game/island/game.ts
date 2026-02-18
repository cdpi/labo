
import { newIsland } from "./island.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const DEBUG:boolean = false;

const COUNT:number = 21;
const SCALE:number = 80;
const SMOOTHNESS:number = 0.125;

window.document.body.innerHTML = newIsland(window.innerWidth, window.innerHeight, COUNT, SCALE, SMOOTHNESS, DEBUG);
