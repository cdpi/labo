

class Island
	{
	public octaves:number = 0;
	}

const islandHandler = ():ProxyHandler<Island> =>
	{
	const handler:ProxyHandler<Island> =
		{
		get(island:Island, property:string|symbol):any
			{
			return island[property as keyof Island];
			},

		set(island:Island, property:string|symbol, value:any):boolean
			{
			island[property as keyof Island] = value;

			return true;
			}
		};

	return handler;
	};

const islandProxy = (island:Island):Island =>
	{
	const proxy:Island = new Proxy<Island>(island, islandHandler());

	//inputHandler(proxy, attributeName);

	return proxy;
	};

// svg element, attribute <-(proxy)-> form input

type IslandFilter = SVGFEMorphologyElement | SVGFETurbulenceElement | SVGFEDisplacementMapElement;

type IslandControl<T extends IslandFilter> =
	{
	filter:T;
	input:HTMLInputElement;
	};

type IslandControls =
	{
	octaves:IslandControl<SVGFEMorphologyElement>;
	};

function getIslandProxy(controls:IslandControls)
	{
	const island:Island = new Island();

	islandProxy(island);
	}

const controls:IslandControls =
	{
	octaves:
		{
		filter: document.querySelector("sdsd") as SVGFEMorphologyElement,
		input: document.querySelector("sdsd") as HTMLInputElement
		}
	};

getIslandProxy(controls);
