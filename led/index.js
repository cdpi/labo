
import { WiZ } from "./wiz.js";
import express from "express";

const LAMP = {IP: "172.22.22.95", PORT: 38899};

const wiz = new WiZ(LAMP.IP, LAMP.PORT);

const app = express();

app.get("/", (_request, response) =>
	{
	response.send("WiZ");
	});

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

app.get("/color/:red/:green/:blue", async (request, response) =>
	{
	const red = parseInt(request.params.red);
	const green = parseInt(request.params.green);
	const blue = parseInt(request.params.blue);

	const result = await wiz.setColor(red, green, blue);

	response.send(result);
	});

app.listen(3000, () =>
	{
	console.log("WiZ server is running on http://localhost:3000");
	});
