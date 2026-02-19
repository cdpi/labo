
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IBinding
	{
	update(value:any):void;
	}

class TextBinding<T extends HTMLElement> implements IBinding
	{
	public constructor(private element:T)
		{
		}

	public update(value:any):void
		{
		this.element.textContent = String(value);
		}
	}

class AttributeBinding<T extends Element> implements IBinding
	{
	public constructor(private element:T, private attribute:string)
		{
		}

	public update(value:any):void
		{
		this.element.setAttribute(this.attribute, String(value));
		}
	}

class StyleBinding<T extends HTMLElement> implements IBinding
	{
	public constructor(private element:T, private property:keyof CSSStyleDeclaration)
		{
		}

	public update(value:any):void
		{
		//this.element.style[this.property] as unknown = String(value);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Transformer = (value:any) => any;

class TransformedBinding implements IBinding
	{
	public constructor(private binding:IBinding, private transform:Transformer)
		{
		}

	public update(value:any):void
		{
		const newValue:any = this.transform(value);

		this.binding.update(newValue);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class BindingFactory
	{
	public static text<T extends HTMLElement>(selector:string|T, transform?:Transformer):IBinding
		{
		const binding:IBinding = new TextBinding(this.getElement(selector));

		return transform ? new TransformedBinding(binding, transform) : binding;
		}

	private static getElement<T extends Element>(selector:string|T):T
		{
		return (typeof selector === "string") ? document.querySelector<T>(selector) as T : selector;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class BindingManager<T extends object>
	{
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
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	IBinding,
	TextBinding,
	AttributeBinding,

	Transformer,
	TransformedBinding,

	BindingFactory,

	BindingManager
	};
