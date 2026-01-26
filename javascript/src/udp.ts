
import * as dgram from "node:dgram";
import { Buffer } from "node:buffer";

/*
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
*/

async function sendAndReceive(message:string, ip:string, port:number, timeout:number = 2000):Promise<string>
	{
	return new Promise<string>((resolve, reject) =>
		{
		let timer:NodeJS.Timeout;
		let isClosed:boolean = false;

		const socket = dgram.createSocket("udp4");

		const closeSocket = () =>
			{
			if (isClosed)
				{
				return;
				}

			isClosed = true;

			clearTimeout(timer);

			socket.close();
			};

		socket.on("error", (error:Error) =>
			{
			closeSocket();

			reject(error);
			});

		socket.on("message", (message:Buffer<ArrayBuffer>) =>
			{
			closeSocket();

			resolve(message.toString());
			});

		socket.connect(port, ip, () =>
			{
			socket.send(message, (error:Error|null) =>
				{
				if (error)
					{
					closeSocket();

					reject(error);

					return;
					}
				});

			timer = setTimeout(() =>
				{
				if (!isClosed)
					{
					closeSocket();

					reject(new Error("Timeout"));
					}
				},
				timeout);
			});
		});
	}














/*
(async () => {
    try {
        console.log("Tentative 1...");
        const rep1 = await sendOneShot("Status?", "127.0.0.1", 41234);
        console.log("Reçu:", rep1);

        // Le socket précédent est détruit. Celui-ci est entièrement nouveau.
        console.log("Tentative 2..."); 
        const rep2 = await sendOneShot("Restart", "127.0.0.1", 41234);
        console.log("Reçu:", rep2);

    } catch (e: any) {
        console.error("Erreur:", e.message);
    }
})();
*/

export
	{
	sendAndReceive
	};
