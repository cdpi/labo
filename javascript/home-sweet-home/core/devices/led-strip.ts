
import { setPilot } from "#home/infrastructure/wiz/pilot.js";
import { Device } from "./device.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class LEDStrip extends Device
	{
	}

class WiZLEDStrip extends LEDStrip
	{
	public async setColor(red:number, green:number, blue:number):Promise<any>
		{
		const response:any = await setPilot("172.22.22.95", 38899, {red, green, blue}, 60);

		return response;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	LEDStrip,
	WiZLEDStrip
	};
