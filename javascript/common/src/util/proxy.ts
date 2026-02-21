
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type WatchCallback = (property:string, value:any) => void;

function setterHandler<T extends object>(callback:WatchCallback):ProxyHandler<T>
	{
	const handler:ProxyHandler<T> =
		{
		set(target:T, property:string|symbol, value:any):boolean
			{
			target[property as keyof T] = value;

			callback(property as string, value);

			return true;
			}
		};

	return handler;
	}

function watch<T extends object>(target:T, callback:WatchCallback):T
	{
	return new Proxy<T>(target, setterHandler(callback));
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	WatchCallback,
	setterHandler,
	watch
	};
