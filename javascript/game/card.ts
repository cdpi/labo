
import { getRandom } from "#util/random.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface ICard
	{
	}

abstract class Card implements ICard
	{
	}

class Deck<T extends Card>
	{
	protected cards:Array<T>;

	constructor()
		{
		this.cards = new Array<T>();
		}

	add(card:T):void
		{
		this.cards.push(card);
		}

	deal():T
		{
		if (this.cards.length === 0)
			{
			throw new Error("Deck is empty");
			}

		return this.cards.pop() as T;
		}

	shuffle():void
		{
		for (let i = this.cards.length - 1; i > 0; i--)
			{
			//return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
			const j = Math.floor(Math.random() * (i + 1));

			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
			}
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Deck
	};
