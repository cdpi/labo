
import { Manager as ThemeManager } from "@cdpi/css/theme.js";

import { Manager as BindingManager } from "@cdpi/binding/manager.js";
import { Factory as BindingFactory } from "@cdpi/binding/factory.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type State =
	{
	n:number;
	};

class HowTo
	{
	private readonly ui:BindingManager;
	private readonly state:BindingFactory<State>;
	private readonly theme:ThemeManager;

	public constructor()
		{
		this.ui = new BindingManager();
		this.state = new BindingFactory<State>();
		this.theme = new ThemeManager();
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	HowTo
	};
