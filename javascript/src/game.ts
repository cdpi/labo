
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Deck
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Deck<T>
	{
	protected cards:Array<T>;

	constructor()
		{
		this.cards = new Array<T>();
		}

	add(card:T):void
		{
		this.cards.push(card);
		}

	deal():T
		{
		if (this.cards.length === 0)
			{
			throw new Error("Deck is empty");
			}

		return this.cards.pop() as T;
		}

	shuffle():void
		{
		for (let i = this.cards.length - 1; i > 0; i--)
			{
			const j = Math.floor(Math.random() * (i + 1));

			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
			}
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Player
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Player
	{
	public readonly name:string;

	public constructor(name:string)
		{
		this.name = name;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Human
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Human extends Player
	{
	public constructor(name:string = "Human")
		{
		super(name);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Computer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Computer extends Player
	{
	public constructor(name:string = "Computer")
		{
		super(name);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Grid
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Grid<T>
	{
	private size:number;
	//private grid:Array<Array<T>>;

	constructor(size:number)
		{
		this.size = size;
		//this.grid = (new Array<Array<T>>(size)).fill(new Array<T>(size).fill(null));
		}

	private getRowCount(row:number):number
		{
		let count = 0;

		/*
		for (let column = 0; column < this.size; column++)
			{
			if (this.isEmpty(row, column))
				{
				count++;
				}
			}
		*/

		return count;
		}

	private getColumnCount(column:number):number
		{
		return 0;
		}

	/*
	isEmpty(row:number, column:number):boolean
		{
		return this.grid[row][column] === null;
		}
	*/
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//type ConstraintType = 'EXACT' | 'MIN' | 'MAX' | 'JOKER';
interface Tile
	{
	//id:number;
	//label:string; // Ex: "3", "2+", "★"
	value:number; // Valeur pour le contrainte (ex: 2 pour "2+")
	//points:number; // Points marqués quand posée/comptée
	//type:ConstraintType;
	}
*/

/*
interface Position
	{
	row:number;
	column:number;
	}
*/

/*
class Deck2
	{
	private tiles:Array<Tile>;

	constructor()
		{
		const tiles = new Array<Tile>();

		const addTiles = (count:number, value:number) =>
			{
			for (let i = 0; i < count; i++)
				{
				this.tiles.push({value: value});
				}
			};

		addTiles(20, 0);
		addTiles(15, 1);
		addTiles(10, 2);
		addTiles(8, 3);
		addTiles(6, 4);
		addTiles(4, 5);
		addTiles(2, 6);

		for (let i = tiles.length - 1; i > 0; i--)
			{
			const j = Math.floor(Math.random() * (i + 1));

			[tiles[i], tiles[j]] = [tiles[j], tiles[i]];
			}

		this.tiles = tiles;
		}
	}
*/

/*
class Tile
	{
	private rotation:number;

	constructor(rotation:number = 0)
		{
		//this.x = x;
		//this.y = y;
		//this.type = type;
		this.rotation = rotation;
		}

	rotate():void
		{
		this.rotation = (this.rotation + 1) % 4;
		}
	}
*/

/*
class Board
	{
	private rows:number;
	private columns:number;
	private tiles:Array<any>;

	constructor(rows:number, columns:number)
		{
		this.rows = rows;
		this.columns = columns;
		this.tiles = new Array<any>(rows * columns).fill(null);
		}
	}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Deck,
	Player,
	Human,
	Computer,
	Grid
	};
