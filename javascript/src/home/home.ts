
import { readFileSync } from "node:fs";

import { Configuration, WiZ } from "./configuration.js";
import { setPilot } from "../wiz/pilot.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const configuration = Configuration.parse(readFileSync("home.json", "utf-8"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Home
	{
	public constructor()
		{
		}

	public wizTurnOn():void
		{
		const lamp:WiZ = configuration.connectedObjects.wiz[0];

		setPilot(lamp.ip, lamp.port, {red: 100, green: 50, blue: 100}, 60);
		}

	public watchDirectory():void
		{
		/*
		fs.watch('/path/to/folder', (eventType, filename) => {
		console.log(eventType);
		// could be either 'rename' or 'change'. new file event and delete
		// also generally emit 'rename'
		console.log(filename);
		})
		*/
		//new AbortSignal();
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Home
	};
