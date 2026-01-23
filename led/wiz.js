
import dgram from "dgram";

class WiZ
	{
	constructor(ip, port)
		{
		this.ip = ip;
		this.port = port;
		}

	get getPilot()
		{
		return {method: "getPilot", params: {}};
		}

	get setPilot()
		{
		return {method: "setPilot", params: {state: true, r: 128, g: 128, b: 128, dimming: 100}};
		}

	async send(message)
		{
		//console.log(`Sending to ${this.ip}:${this.port} - ${payload}`);

		return new Promise((resolve, reject) =>
			{
			const payload = Buffer.from(JSON.stringify(message));

			const client = dgram.createSocket("udp4");

			client.send(payload, this.port, this.ip, (error, _bytes) =>
				{
				if (error)
					{
					client.close();

					reject("Error sending UDP message");

					return;
					}

				client.on("message", (message, _info) =>
					{
					resolve(message.toString());

					client.close();
					});
				});
			});
		}

	async query()
		{
		const response = await this.send(this.getPilot);

		return response;
		}

	async setColor(red, green, blue, dimming = 100)
		{
		const message = this.setPilot;

		message.params.r = red;
		message.params.g = green;
		message.params.b = blue;
		message.params.dimming = dimming;

		const response = await this.send(message);

		return response;
		}
	}

export
	{
	WiZ
	};
