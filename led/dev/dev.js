
import { getPilot, setPilot } from "../../javascript/js/wiz.js";

// TODO: Détécter IP pas atteignable !! OK

const IP = "172.22.22.95";
const PORT = 38899;

//const response = await getPilot(IP, PORT);
//console.debug(response);

try
	{
	const response = await setPilot(IP, PORT, {red: 50, green: 50, blue: 255}, 100);

	console.debug(response);
	}
catch (error)
	{
	console.warn(error);
	}
