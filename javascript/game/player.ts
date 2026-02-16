
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Player
	{
	public readonly name:string;

	public constructor(name:string)
		{
		this.name = name;
		}
	}

class Human extends Player
	{
	public constructor(name:string = "Human")
		{
		super(name);
		}
	}

class Computer extends Player
	{
	public constructor(name:string = "Computer")
		{
		super(name);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Player,
	Human,
	Computer
	};
