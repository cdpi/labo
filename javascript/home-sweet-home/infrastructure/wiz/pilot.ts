
import { sendAndReceiveUDP4 } from "#cdpi/network/udp.js";

class Pilot
	{
	public constructor(ip:string, port:number)
		{
		}

	private async sendAndReceive():Promise<any>
		{
		//return await sendAndReceive(this.ip, this.port, {method: "getPilot", params: {}});
		}
	}

interface IRGB
	{
	readonly red:number;
	readonly green:number;
	readonly blue:number;
	}

async function sendAndReceive(ip:string, port:number, message:any):Promise<any>
	{
	try
		{
		const command:string = JSON.stringify(message);

		const response = await sendAndReceiveUDP4(command, ip, port);

		const json = JSON.parse(response);

		return Promise.resolve(json);
		}
	catch (error)
		{
		return Promise.reject(error);
		}
	}

async function getPilot(ip:string, port:number):Promise<any>
	{
	return await sendAndReceive(ip, port, {method: "getPilot", params: {}});

	/*
	try
		{
		const command:string = JSON.stringify({method: "getPilot", params: {}});

		const response = await sendAndReceiveUDP4(command, ip, port);

		const json = JSON.parse(response);

		return Promise.resolve(json);
		}
	catch (error)
		{
		return Promise.reject(error);
		}
	*/
	}

type SetPilotOptions =
	{
	color?: IRGB;
	dimming?: number;
	};

async function setPilot(ip:string, port:number, color:IRGB, dimming:number):Promise<any>
	{
	try
		{
		const command:string = JSON.stringify({method: "setPilot", params: {state: true, r: color.red, g: color.green, b: color.blue, dimming}});

		const response = await sendAndReceiveUDP4(command, ip, port);

		const json = JSON.parse(response);

		return Promise.resolve(json);
		}
	catch (error)
		{
		return Promise.reject(error);
		}
	}

export
	{
	getPilot,
	setPilot
	};
