
import { chunk } from "../util/array.js";
import { hex, rgb8888rgb888 } from "./color.js";
import { getPixelsFromFile } from "./image.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//type ImageConverterFromFormat = "RGB888" | "RGB8888";
type ImageConverterFromFormat = "RGB8888";

//type ImageConverterToFormat = "RGB565" | "RGB565BE" | "RGB565LE";
type ImageConverterToFormat = "RGB888";

class ImageConverter
	{
	private lineLength:number;
	private padLength:number;

	private fromFormat:string|null = null;
	private toFormat:string|null = null;

	public constructor(lineLength:number, padLength:number)
		{
		this.lineLength = lineLength;
		this.padLength = padLength;
		}

	public from(format:ImageConverterFromFormat):this
		{
		this.fromFormat = format;

		return this;
		}

	public to(format:ImageConverterToFormat):this
		{
		this.toFormat = format;

		return this;
		}

	public async convert(path:string):Promise<string>
		{
		const pixels:Uint32Array = await getPixelsFromFile(path);

		const colors:Array<number> = Array.from(pixels).map(rgb8888rgb888);

		const code:string = chunk(colors, this.lineLength).map(line => line.map(color => hex(color, "0x", this.padLength)).join(", ")).join("\n");

		return code;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//type SIGNATURE = (lineLength:number, padLength:number) => ImageConverter;
//const RGB8888_TO_RGB888:SIGNATURE = (lineLength:number, padLength:number) => new ImageConverter(lineLength, padLength).from("RGB8888").to("RGB888");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	ImageConverterFromFormat,
	ImageConverterToFormat,
	ImageConverter,

	//RGB8888_TO_RGB888
	};
