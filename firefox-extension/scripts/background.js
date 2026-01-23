
import { slugify } from "./utils.js";

async function actionOnClicked(tab)
	{
	console.log(tab.title + " - " + slugify(tab.title));

	//updateActionBadge("2", "#FF0000");
	}

//browser.runtime.onInstalled.addListener(() => {});

//browser.contextMenus.onClicked.addListener((info, tab) => {});

browser.action.onClicked.addListener(actionOnClicked);
