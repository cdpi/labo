
import { setterHandler } from "common/util/proxy.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
	const setter:ProxyHandler<T> = setterHandler((property:string, value:any) =>
		{
		document.querySelectorAll(`[${attributeName}="${property}"]`).forEach((element:Element) =>
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
		});

	const proxy:T = new Proxy<T>(target, setter);

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
