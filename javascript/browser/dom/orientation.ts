
/*
window.addEventListener("deviceorientation", (event:DeviceOrientationEvent) =>
	{
	let x:number = event.beta || 0;
	let y:number = event.gamma || 0;

	const limit = 45;

	x = Math.max(-limit, Math.min(limit, x));
	y = Math.max(-limit, Math.min(limit, y));
	
	if (Math.abs(x) < 2 && Math.abs(y) < 2)
		{
		document.body.style.backgroundColor = "white";
		}
	else
		{
		document.body.style.backgroundColor = "red";
		}
	});
*/
