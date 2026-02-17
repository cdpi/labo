
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCodePoints(text:string):Array<number>
	{
	const codes:Array<number> = new Array<number>();

	for (const character of text)
		{
		const code:number|undefined = character.codePointAt(0);

		if (code)
			{
			codes.push(code);
			}
		}

	return codes;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// (C'est quoi Variation Selector-16 (fe0f))
// FE0F VARIATION SELECTOR-16 = emoji variation selector
// https://www.unicode.org/charts/PDF/UFE00.pdf
//const VARIATION_SELECTOR_16 = 0xFE0F;

const TEXT_VARIATION_SELECTOR = 0xFE0E;
const EMOJI_VARIATION_SELECTOR = 0xFE0F;

/*
function notVariationSelector16(code:number):boolean
	{
	return (code !== VARIATION_SELECTOR_16);
	}
*/

const notEmojiVariationSelector = (codePoint:number):boolean =>
	{
	return (codePoint !== EMOJI_VARIATION_SELECTOR);
	};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	TEXT_VARIATION_SELECTOR,
	EMOJI_VARIATION_SELECTOR,

	getCodePoints,
	notEmojiVariationSelector
	};
