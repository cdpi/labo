
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type SVGFEFilter = SVGFEDisplacementMapElement | SVGFEMorphologyElement | SVGFETurbulenceElement;

const b = <T extends SVGFEFilter>(target:T):T =>
	{
	const proxy:T = new Proxy<T>(target, setterHandler("data-binding"));

	inputHandler(proxy, "data-binding");

	return proxy;
	};

/*
b<SVGFEDisplacementMapElement>(document.querySelector("feDisplacementMap")!);
b<SVGFEMorphologyElement>(document.querySelector("feMorphology")!);
b<SVGFETurbulenceElement>(document.querySelector("feTurbulence")!);
b<SVGFETileElement>(document.querySelector("feTurbulence")!);
*/

const bindInputToAttribute = <T extends Element>(input:HTMLInputElement, target:T, attributeName:string) =>
	{
	input.addEventListener("input", () => target.setAttribute(attributeName, input.value));
	};

const bindMorphologyAttribute = (target:SVGFEMorphologyElement, attributeName:string) =>
	{
	// readonly in1: SVGAnimatedString;
	//readonly operator: SVGAnimatedEnumeration;
	//readonly radiusX: SVGAnimatedNumber;
	//readonly radiusY: SVGAnimatedNumber;
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const setterHandler = <T extends object>(attributeName:string):ProxyHandler<T> =>
	{
	const handler:ProxyHandler<T> =
		{
		set(object:T, property:string|symbol, value:any):boolean
			{
			object[property as keyof T] = value;

			document.querySelectorAll(`[${attributeName}="${String(property)}"]`).forEach((element:Element) =>
				{
				if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)
					{
					element.value = String(value);
					}
				else
					{
					element.textContent = String(value);
					}
				});

			return true;
			}
		};

	return handler;
	};

const inputHandler = <T extends object>(proxy:T, attributeName:string):void =>
	{
	document.querySelectorAll(`[${attributeName}]`).forEach((element:Element) =>
		{
		if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)
			{
			const property:string|null = element.getAttribute(attributeName);

			if (property)
				{
				element.addEventListener("input", () =>
					{
					proxy[property as keyof T] = element.value as unknown as T[keyof T];
					});
				}
			}
		});
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createTwoWayBinding<T extends object>(target:T, attributeName:string):T
	{
	const proxy:T = new Proxy<T>(target, setterHandler(attributeName));

	inputHandler(proxy, attributeName);

	return proxy;
	}

function binding<T extends object>(target:T):T
	{
	return createTwoWayBinding(target, "data-binding");
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	createTwoWayBinding,
	binding
	};
