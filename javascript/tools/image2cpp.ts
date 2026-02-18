
import { ImageConverter } from "#nodeimage/converter.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const path:string = "/home/thefab/Documents/seb-leds.png";
//const path:string = "tests/images/emoji_1f352.bmp";

const converter:ImageConverter = new ImageConverter(11, 6).from("RGB8888").to("RGB888");

const code:string = await converter.convert(path);

console.log(code);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
