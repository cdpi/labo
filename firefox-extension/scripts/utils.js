
// Gemini App const sanitizedTitle = text.replace(/[/\\?%*:|"<>]/g, '-').trim();
// Gemini VSCode return sanitizedTitle.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
function slugify(text)
	{
	return text.trim().toLowerCase()
		.replace(/[/\\?%*:|"<>]/g, "-")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-+|-+$/g, "");
	}

function updateActionBadge(text, color)
	{
	browser.action.setBadgeText({text: text});
	browser.action.setBadgeBackgroundColor({color: color});
	/*
	setTimeout(async () => {
	const data = await browser.storage.local.get("mode");
	updateUI(data.mode || "copy");
	}, 1000);
	*/
	}

export
	{
	slugify,
	updateActionBadge
	};
