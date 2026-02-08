#!/usr/bin/env node

import express from "express";
//import mqtt from "mqtt";

import { api } from "./api.js";
//import { connect as connectToBroker } from "./broker.js";

//const HOST = "localhost";

//const broker:mqtt.MqttClient = await connectToBroker(HOST);

const app = express();

app.use(express.static("public"));

app.use("/api", api);

app.get("/broker", (request, response) =>
	{
	//broker.publish("test/topic", "Hello depuis JS");

	response.send("HOME");
	});

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
