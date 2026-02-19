
import { Island } from "./island.js";
import { Treasure } from "./treasure.js";
import { Pirate } from "./player.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class TreasureIsland
	{
	//private readonly treasure:Treasure;
	//private readonly island:Island;

	public constructor()
		{
		//this.treasure = new Treasure();
		//this.island = new Island();

		const player:Pirate = new Pirate();
		}

	private sdsd():void
		{
		document.addEventListener("keypress", (event:KeyboardEvent) =>
			{
			//if (event.code == KeyboardEvent.DOM_KEY_LOCATION_RIGHT){}
			//event.key
			});
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	TreasureIsland
	};
