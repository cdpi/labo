
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const THEME_SELECTOR:string = "link[rel~='stylesheet'][title]";

const ACTIVE_THEME_SELECTOR:string = "link[rel~='stylesheet']:not(disabled)[title]";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getActiveStyleSheet():string|null
	{
	const link:HTMLLinkElement|null = document.querySelector<HTMLLinkElement>(ACTIVE_THEME_SELECTOR);

	return link ? link.title : null;
	}

/*
function setActiveStyleSheet(title:string):void
	{
	const links:NodeListOf<HTMLLinkElement> = document.querySelectorAll<HTMLLinkElement>("link[rel*='style']");

	links.forEach((link:HTMLLinkElement) =>
		{
		if (link.title)
			{
			link.disabled = (link.title !== title);
			}
		});
	}
*/

/*
function setActiveStyleSheet(title:string):void
	{
	const links:NodeListOf<HTMLLinkElement> = document.querySelectorAll<HTMLLinkElement>(THEME_SELECTOR);

	links.forEach((link:HTMLLinkElement) => link.disabled = link.title !== title);
	}
*/

function setActiveStyleSheet(title:string):void
	{
	document.querySelectorAll<HTMLLinkElement>(THEME_SELECTOR)
		.forEach((link:HTMLLinkElement) => link.disabled = link.title !== title);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

abstract class ThemeObserver
	{
	protected readonly darkMode:MediaQueryList;

	public constructor()
		{
		this.darkMode = window.matchMedia("(prefers-color-scheme: dark)");

		this.init();
		}

	protected abstract onSystemThemeChange(isDark:boolean):void;

	private init():void
		{
		this.darkMode.addEventListener("change", (event:MediaQueryListEvent) => this.onSystemThemeChange(event.matches));
		}
	}

class ThemeManager extends ThemeObserver
	{
	public constructor()
		{
		super();
		}

	public get activeTheme():string|null
		{
		return getActiveStyleSheet();
		}

	public set activeTheme(theme:string)
		{
		setActiveStyleSheet(theme);
		}

	public get themes():Array<string>
		{
		const list:Array<string> = new Array<string>();

		document.querySelectorAll<HTMLLinkElement>(THEME_SELECTOR).forEach((link:HTMLLinkElement) =>
			{
			list.push(link.title);
			});

		return list;
		}

	protected onSystemThemeChange(isDark:boolean):void
		{
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getActiveStyleSheet,
	setActiveStyleSheet,

	ThemeObserver,
	ThemeManager
	};
