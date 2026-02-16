
import { readFileSync } from "node:fs";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Home
	{
	public readonly configuration:any;

	public constructor(path:string)
		{
		this.configuration = JSON.parse(readFileSync(path, "utf-8"));
		}

	/*
	public wizTurnOn():void
		{
		const lamp:WiZ = configuration.connectedObjects.wiz[0];

		setPilot(lamp.ip, lamp.port, {red: 100, green: 50, blue: 100}, 60)
			.then((response:any) => console.log(response))
			.catch((error:any) => console.error(error));
		}
	*/

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
