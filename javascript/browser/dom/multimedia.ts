
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type AudioOff = false;

type AudioOn =
	{
	};

type AudioConstraints = AudioOff | AudioOn;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type FacingMode = "user" | "environment" | "left" | "right";

type VideoOff = false;

type VideoOn =
	{
	facingMode:FacingMode,
	width:
		{
		ideal:number
		},
	height:
		{
		ideal:number
		}
	};

type VideoConstraints = VideoOff | VideoOn;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getMediaStream(audioConstraints:AudioConstraints, videoConstraints:VideoConstraints):Promise<MediaStream>
	{
	const constraints =
		{
		audio: audioConstraints,
		video: videoConstraints
		};

	return await navigator.mediaDevices.getUserMedia(constraints);
	}

async function getVideoStream(mode:FacingMode, width:number, height:number):Promise<MediaStream>
	{
	return await getMediaStream(false, {facingMode: mode, width: {ideal: width}, height: {ideal: height}});
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getMediaStream,
	getVideoStream
	};
