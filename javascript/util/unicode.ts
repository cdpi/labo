
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

// TODO: C'est quoi Variation Selector-16 (fe0f)

const VARIATION_SELECTOR_16 = 0xFE0F;

function notVariationSelector16(code:number):boolean
	{
	return (code !== VARIATION_SELECTOR_16);
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	getCodePoints,
	notVariationSelector16
	};
