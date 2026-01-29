
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// On renvoie un entier aléatoire entre une valeur min (incluse) et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution non uniforme !
function getRandom(minimum:number, maximum:number):number
	{
	minimum = Math.ceil(minimum);
	maximum = Math.floor(maximum);

	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Codes emoji et hexa pour construire URL font Noto sur GitHub
// TODO: C'est quoi Variation Selector-16 (fe0f)
// TODO: Mettre au propre entre util et emoji...
function getEmojiCodePoints(text:string):Array<string>
	{
	const hex:Array<string> = new Array<string>();

	for (const char of text)
		{
		const code = char.codePointAt(0);

		// TODO: Passer en paramètre
		// On ignore le Variation Selector-16 (fe0f)
		if (code && code !== 0xfe0f)
			{
			hex.push(code.toString(16));
			}
		}

	return hex;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getRandom,
	getEmojiCodePoints
	};
