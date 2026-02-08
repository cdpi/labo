
import mqtt from "mqtt";
//import { MqttClient as Client, ErrorWithReasonCode, connect as sdds } from "mqtt";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Broker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IBroker
	{
	}

class Broker implements IBroker
	{
	constructor(host:string)
		{
		}
	}

async function connect(host:string):Promise<mqtt.MqttClient>
	{
	return new Promise<mqtt.MqttClient>((resolve, reject) =>
		{
		const url:string = `mqtt://${host}`;

		const client:mqtt.MqttClient = mqtt.connect(url);

		//client.disconnected

		client.on("error", (error:Error|mqtt.ErrorWithReasonCode) =>
			{
			// TODO: Faire ça simplement
			//const asassdss:string = error.message;
			//const asas:string = (error as Error).message;

			//const reason:string = (error instanceof Error) ? error.message : (error as mqtt.ErrorWithReasonCode).message;

			client.end();

			//reject(reason);
			reject(error.message);
			});

		client.on("connect", (packet:mqtt.IConnackPacket) =>
			{
			resolve(client);
			});
		});
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
