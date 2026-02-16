
import express from "express";

import { Home } from "#home/core/home.js";
import { api } from "./api.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Server extends Home
	{
	public constructor()
		{
		super("home.json");
		}

	public run():void
		{
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Server
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const app = express();

app.use(express.static("public"));

app.use("/api", api);

/*
app.get("/broker", (request, response) =>
	{
	//broker.publish("test/topic", "Hello depuis JS");

	response.send("HOME");
	});
*/

/*
app.get("/query", async (_request, response) =>
	{
	const result = await wiz.query();

	response.send(result);
	});

app.get("/red", async (_request, response) =>
	{
	const result = await wiz.setColor(255, 0, 0);

	response.send(result);
	});

*/

//app.listen(PORT, "0.0.0.0");
//app.listen(PORT, "localhost");
app.listen(3000, () =>
	{
	console.log("Home is running on http://localhost:3000");
	});
