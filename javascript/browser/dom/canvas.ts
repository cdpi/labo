
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getOffscreenCanvasFromImageBlob(blob:Blob):Promise<OffscreenCanvas>
	{
	const bitmap = await createImageBitmap(blob);

	const { width, height } = bitmap;

	const canvas = new OffscreenCanvas(width, height);

	const context = canvas.getContext("2d") as OffscreenCanvasRenderingContext2D;

	canvas.width = width;
	canvas.height = height;

	context.drawImage(bitmap, 0, 0);

	return canvas;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getOffscreenCanvasFromImageBlob
	};
