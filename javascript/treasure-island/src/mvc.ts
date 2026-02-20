
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Model<T extends { new(...args: any[]): {} }>(constructor: T):T
	{
	return class extends constructor
		{
		};
	}

function View<T extends { new(...args: any[]): {} }>(constructor: T):T
	{
	return class extends constructor
		{
		};
	}

function Controller<T extends { new(...args: any[]): {} }>(constructor: T):T
	{
	return class extends constructor
		{
		};
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Model,
	View,
	Controller
	};
