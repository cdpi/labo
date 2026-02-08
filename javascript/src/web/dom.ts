//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DOM
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @since 0.1.0
 */
async function getOffscreenCanvasFromImageBlob(blob:Blob):Promise<OffscreenCanvas>
	{
	const bitmap = await createImageBitmap(blob);

	const { width, height } = bitmap;

	const canvas = new OffscreenCanvas(width, height);

	const context = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

//context.drawImage(bitmap, 0, 0);

	return canvas;
	}

/*
getOffscreenCanvasFromImageBlob(new Blob()).then(canvas =>
	{
	let ass = canvas; // as CanvasImageData;
	ass.getContext("2d").getImageData().data
	});
*/
