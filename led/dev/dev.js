
import { getPilot, setPilot } from "../../javascript/js/wiz.js";

// TODO: Détécter IP pas atteignable !!

const IP = "172.22.22.95";
const PORT = 38899;

//const response = await getPilot(IP, PORT);
//console.debug(response);

const response = await setPilot(IP, PORT, {red: 50, green: 10, blue: 255}, 100);

console.debug(response);
