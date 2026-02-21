
import { ThemeManager, setActiveStyleSheet } from "@cdpi/css/theme.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
import { HowTo } from "@howto/howto.js";

const howto = new HowTo();

console.log(howto.themes);
console.log(howto.activeTheme);

howto.activeTheme = "Sombre";

console.log(howto.activeTheme);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class HowTo extends ThemeManager
	{
	// OK themes et activeTheme fonctionnent

	/*
	protected onSystemThemeChange(isDark:boolean):void
		{
		// OK onSystemThemeChange fonctionne
		console.log(`DarkMode: ${isDark}`);
		}
	*/
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	HowTo
	};
