
/*
type User =
	{
	username:string;
	};

const ui = new BindingManager<User>(document.body);

const name = document.querySelector("#sdds") as HTMLInputElement;

const usernameAsUpperCase = BindingFactory.text("#username", (value:any) => (value as string).toUpperCase());

ui.register("username", new Array<IBinding>
	(
	//new TextBinding(name),
	BindingFactory.text("ds"),
	new AttributeBinding(name, "sd"),
	usernameAsUpperCase
	));

ui.notify("username", "Gaston");

type IslandFilter =
	{
	dilate:number;
	};

const svg = new BindingManager<IslandFilter>(document.body);

const filter = BindingFactory.text("#filter");

svg.register("dilate", [filter]);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IBinding
	{
	update(value:any):void;
	}

class Manager //<T extends object>
	{
	/*
	private bindings:Map<keyof T, Array<IBinding>> = new Map();

	public constructor(private root:HTMLElement)
		{
		this.init();
		}

	public register(key:keyof T, targets:Array<IBinding>):void
		{
		this.bindings.set(key, targets);
		}

	public notify(key:keyof T, value:any):void
		{
		this.bindings.get(key)?.forEach(binding => binding.update(value));
		}

	private init():void
		{
		this.root.addEventListener("input", (event:Event) =>
			{
			const target:HTMLInputElement = event.target as HTMLInputElement;

			const key:keyof T = target.dataset.publish as keyof T;

			if (key && this.bindings.has(key))
				{
				this.notify(key, target.value);
				}
			});
		}
	*/
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IBinding,

	Manager
	};
