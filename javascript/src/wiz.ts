
import { type IRGB } from "./color.js";
import { sendReceiveString } from "./udp.js";

/*
type Method = "getPilot" | "setPilot";

type Parameters =
	{
	state?:boolean;
	success?:boolean;
	r?:number;
	g?:number;
	b?:number;
	dimming?:number;
	mac?:string;
	//"rssi":-51,
	//"sceneId":11,
	//"temp":2700,
	};

type Pilot =
	{
	method:Method;
	env?:string;
	params?:Parameters;
	result?:Parameters;
	};
*/

async function getPilot(ip:string, port:number):Promise<any>
	{
	try
		{
		const command:string = JSON.stringify({method: "getPilot", params: {}});

		const response = await sendReceiveString(command, ip, port);

		const json = JSON.parse(response);

		return Promise.resolve(json);
		}
	catch (error)
		{
		return Promise.reject(error);
		}
	}

//async function setPilot(ip:string, port:number, red:number, green:number, blue:number, dimming:number):Promise<any>
async function setPilot(ip:string, port:number, color:IRGB, dimming:number):Promise<any>
	{
	try
		{
		const command:string = JSON.stringify({method: "setPilot", params: {state: true, r: color.red, g: color.green, b: color.blue, dimming}});

		const response = await sendReceiveString(command, ip, port);

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
