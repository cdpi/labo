
function WorkInProgress<T extends { new(...args: any[]): {} }>(constructor: T)
	{
	return class extends constructor
		{
		};
	}

function Bug<T extends { new(...args: any[]): {} }>(constructor: T)
	{
	return class extends constructor
		{
		};
	}

function See<T extends { new(...args: any[]): {} }>(constructor: T)
	{
	return class extends constructor
		{
		};
	}

export
	{
	WorkInProgress,
	Bug,
	See
	};
