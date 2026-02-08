
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

export
	{
	getRandom
	};
