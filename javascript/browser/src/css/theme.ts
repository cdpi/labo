
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const THEME_SELECTOR:string = "link[rel~='stylesheet'][title]";

const ACTIVE_THEME_SELECTOR:string = "link[rel~='stylesheet']:not(disabled)[title]";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getActiveStyleSheet():string|null
	{
	const link:HTMLLinkElement|null = document.querySelector<HTMLLinkElement>(ACTIVE_THEME_SELECTOR);

	return link ? link.title : null;
	}

function setActiveStyleSheet(title:string):void
	{
	document.querySelectorAll<HTMLLinkElement>(THEME_SELECTOR)
		.forEach((link:HTMLLinkElement) => link.disabled = link.title !== title);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

abstract class Observer
	{
	protected readonly darkMode:MediaQueryList;

	public constructor()
		{
		this.darkMode = window.matchMedia("(prefers-color-scheme: dark)");

		this.init();
		}

	// OK onSystemThemeChange fonctionne
	//console.log(`DarkMode: ${isDark}`);
	protected abstract onSystemThemeChange(isDark:boolean):void;

	private init():void
		{
		this.darkMode.addEventListener("change", (event:MediaQueryListEvent) => this.onSystemThemeChange(event.matches));
		}
	}

// OK themes et activeTheme fonctionnent
class Manager extends Observer
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

	Observer,
	Manager
	};
