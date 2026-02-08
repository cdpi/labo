
//import "reflect-metadata";
//import { Expose, Type } from "class-transformer";

/*


interface ILightColor extends ILightStatus
	{
	temp?: number;
	r?: number;
	g?: number;
	b?: number;
	sceneId?: number;
	}


*/

interface IDeviceInfo
	{
	mac: string;
	rssi: number;
	}

interface ILightStatus
	{
	state: boolean;
	temp: number;
	dimming: number;
	}

// Le résultat du GET contient tout (Info + Couleur)
type PilotResult = IDeviceInfo & ILightStatus;

/*


// Les paramètres du SET sont souvent partiels (on ne change pas tout d'un coup)
// On utilise Partial pour permettre d'envoyer seulement { "state": true } par exemple
type SetPilotParams = Partial<ILightColor>;
*/

type Method = "getPilot" | "setPilot";

//{ method: 'setPilot', env: 'pro', result: { success: true } }

type SetPilotOptions =
	{
	}

type SetPilotResult =
	{
	//success:boolean;
	/*
	"mac": "d8a011dd2061",
	"rssi": -64,
	"state": true,
	"sceneId": 11,
	"temp": 2700,
	"dimming": 27
	*/
	};

type SetPilotResponse =
	{
	method: Method;
	env: string;
	result: SetPilotResult;
	};

/*


interface IMessage
	{
	method:Method;
	//env:string|null;
	//params?:Parameters;
	//result?:Parameters;
	}
*/

/*
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
*/

export
	{
	Method
	/*
	ILightStatus,
	ILightColor,
	IDeviceInfo,
	PilotResult,
	SetPilotParams
	*/
	};
