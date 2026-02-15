
import express from "express";

const api = express.Router();

api.use((request, response, next) =>
	{
	console.log('%s %s %s', request.method, request.url, request.path);
	next();
	});

api.use("/q", (request, response, next) =>
	{
	console.log("q");
	next();
	});

api.use((request, response, next) =>
	{
	response.send("API");
	});

export
	{
	api
	};
