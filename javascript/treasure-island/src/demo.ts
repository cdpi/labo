
//type ScrollElements = Element | Array<Element> | NodeList;
type ScrollElements = NodeListOf<Element>;

type ScrollCallback = (entry:IntersectionObserverEntry) => void;

const Scroll = (elements:ScrollElements, callback:ScrollCallback):void =>
	{
	const options:IntersectionObserverInit =
		{
		root: null,
		rootMargin: "0px",
		threshold: [0, 0.5, 1]
		};

	const callbacks:IntersectionObserverCallback = (entries:Array<IntersectionObserverEntry>):void =>
		{
		entries.forEach((entry:IntersectionObserverEntry) => callback(entry));
		};

	const observer:IntersectionObserver = new IntersectionObserver(callbacks, options);

	elements.forEach((element:Element) =>
		{
		observer.observe(element);
		});
	};

const elements:NodeListOf<SVGElement> = document.querySelectorAll("svg");

Scroll(elements, (entry:IntersectionObserverEntry) =>
	{
	console.log(entry.isIntersecting);
	});
