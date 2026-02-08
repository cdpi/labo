
import "reflect-metadata";
import { Expose, Type, plainToInstance } from "class-transformer";

class NeoPixel
	{
	}

class WiZ
	{
	@Expose({name: "name"})
	name:string;

	@Expose({name: "ip"})
	ip:string;

	@Expose({name: "port"})
	port:number;
	}

class ConnectedObjects
	{
	@Expose({name: "neopixel"})
	@Type(() => Array<NeoPixel>)
	neopixel:Array<NeoPixel>;

	@Expose({name: "wiz"})
	@Type(() => Array<WiZ>)
	wiz:Array<WiZ>;
	}

class Configuration
	{
	@Expose({name: "connected-objects"})
	@Type(() => ConnectedObjects)
	connectedObjects:ConnectedObjects;

	public static parse(json:string):Configuration
		{
		return plainToInstance(Configuration, JSON.parse(json));
		}
	}

export
	{
	NeoPixel,
	WiZ,
	ConnectedObjects,
	Configuration
	};
