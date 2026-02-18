
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
interface IPosition
	{
	row:number;
	column:number;
	}
*/

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

export
	{
	Grid
	};
