
import { displayVideoStream } from "#util/dom/video.js";

const webcam:HTMLVideoElement = document.querySelector("#webcam") as HTMLVideoElement;

await displayVideoStream(webcam, 1920, 1080);
