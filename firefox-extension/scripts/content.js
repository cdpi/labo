
async function browserOnMessage(action)
	{
	console.debug(action);
	}

browser.runtime.onMessage.addListener(browserOnMessage);
