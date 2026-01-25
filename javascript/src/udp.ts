
import * as dgram from "node:dgram";
import { Buffer } from "node:buffer";

async function sendReceiveString(message:string, ip:string, port:number):Promise<string>
	{
	return new Promise((resolve, reject):void =>
		{
		const payload = Buffer.from(message);

		const client = dgram.createSocket("udp4");

		client.send(payload, port, ip, (error:Error|null, _bytes:number):void =>
			{
			if (error)
				{
				client.close();

				reject(error);

				return;
				}

			client.on("error", (error:Error):void =>
				{
				client.close();

				reject(error);

				return;
				});

			client.on("message", (message:Buffer<ArrayBuffer>, _info:dgram.RemoteInfo) =>
				{
				const response:string = message.toString();

				resolve(response);

				client.close();
				});
			});
		});
	}

export
	{
	sendReceiveString
	};
