
import { IBinding } from "./manager.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Transformer = (value:any) => any;

class TransformedBinding implements IBinding
	{
	public constructor(private readonly binding:IBinding, private readonly transform:Transformer)
		{
		}

	public update(value:any):void
		{
		this.binding.update(this.transform(value));
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	Transformer,
	TransformedBinding
	};
