#!/usr/bin/env node

// home pas command Linux ;-)
// alias dans .bash_aliases

import { argv } from "node:process";

import { setPilot } from "../wiz/pilot.js";

console.log("Home CLI");

if (argv[2] === "led")
	{
	const color = argv[3];

	const rgb =
		{
		red: 0,
		green: 0,
		blue: 0
		};

	switch (color)
		{
		case "red":
			rgb.red = 255;
			break;
		case "green":
			rgb.green = 255;
			break;
		case "blue":
			rgb.blue = 255;
			break;
		default:
			rgb.red = 255;
			rgb.green = 255;
			rgb.blue = 255;
			break;
		}

	await setPilot("172.22.22.95", 38899, rgb, 50);
	}
