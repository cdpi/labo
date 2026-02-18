
import { MqttClient as Client, IConnackPacket, ErrorWithReasonCode, connect } from "mqtt";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Broker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IBroker
	{
	connect():void;
	//disconnect():void;
	}

class Broker implements IBroker
	{
	public constructor()
		{
		}

	public async connect():Promise<void>
		{
		return new Promise<void>((resolve, reject) =>
			{
			//const url:string = `mqtt://${host}`;
			const url:string = "mqtt://localhost";

			const client:Client = connect(url);

			client.on("error", (error:Error|ErrorWithReasonCode) =>
				{
				client.end();

				reject(error.message);
				});

			client.on("connect", (packet:IConnackPacket) =>
				{
				resolve();
				});
			});
		}

	//public disconnect():void{}
	}

/*
async function connect(host:string):Promise<mqtt.MqttClient>
	{
	return new Promise<mqtt.MqttClient>((resolve, reject) =>
		{
		});
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
