
type Author = "ai" | "human";

type Channel = "web"; // | "mobile" | "desktop" | "other";

type Type = "image" | "text";

interface IContent
	{
	type:Type;
	text:string;
	//url:string;
	//thumbnailUrl:string|undefined|null;
	//prompt:string;
	//partId:number;
	//reaction:string|undefined|null;

	get isImage():boolean;
	get isText():boolean;
	}

interface IMessage
	{
	id:string;
	author:Author;
	channel:Channel;
	}

interface IConversation
	{
	conversationTitle:string;
	messages:Array<IMessage>;
	}

class Content implements IContent
	{
	readonly type:Type;
	readonly text:string;

	/*
	readonly text:string|undefined|null;
	readonly url:string|undefined|null;
	readonly thumbnailUrl:string|undefined|null;
	readonly prompt:string|undefined|null;
	readonly partId:number;
	readonly reaction:string|undefined|null;
	*/

	constructor(type:Type, text:string, prompt:string, partId:number)
		{
		this.type = type;
		this.text = text;
		//this.url = url;
		//this.thumbnailUrl = thumbnailUrl;
		//this.prompt = prompt;
		//this.partId = partId;
		//this.reaction = reaction;
		}

	public get isImage():boolean
		{
		return this.type === "image";
		}

	public get isText():boolean
		{
		return this.type === "text";
		}

	/*
	public static sortByPartID(left:Content, right:Content):number
		{
		if (left.partId < right.partId)
			{
			return -1;
			}

		if (left.partId > right.partId)
			{
			return 1;
			}

		return 0;
		}
	*/
	}

/*
class Message
	{
	readonly id:string;
	readonly author:Author;
	readonly channel:Channel;
	readonly createdAt:string;
	readonly reaction:string|undefined|null;
	readonly content:Array<Content>;

	public getCreatedAt():Date
		{
		return new Date(this.createdAt);
		}

	public getContent():Array<Content>
		{
		return this.content.sort(Content.sortByPartID);
		}

	public static sortByCreatedAt(left:Message, right:Message):number
		{
		if (left.getCreatedAt() < right.getCreatedAt())
			{
			return -1;
			}

		if (left.getCreatedAt() > right.getCreatedAt())
			{
			return 1;
			}

		return 0;
		}
	}
*/

/*
class Conversation
	{
	conversationTitle:string;
	messages:Array<Message>;

	public getMessages():Array<Message>
		{
		return this.messages.sort(Message.sortByCreatedAt);
		}
	}
*/

class CopilotAPI
	{
	private static readonly CONVERSATIONS:string = "https://copilot.microsoft.com/c/api/conversations/shares/";

	/*
	public constructor()
		{
		}

	public async getConversation(id:string):Promise<Conversation>
		{
		const response:Response = await fetch(CopilotAPI.CONVERSATIONS + id, {method: "GET"});

		if (!response.ok)
			{
			//throw new Error(`Failed to fetch conversation: ${response.statusText}`);
			}

		const json:any = await response.json();

		const conversation:Conversation = new Conversation();

		conversation.conversationTitle = json.conversationTitle;
		conversation.messages = json.messages;

		//return json as Conversation;
		return conversation;
		}
	*/
	}

export
	{
	Author,
	Channel,
	Type,
	IContent,
	IMessage,
	Content,
	CopilotAPI
	};

/*
import { CopilotAPI } from "./copilot-api.js";

const copilot = new CopilotAPI();

copilot.getConversation("VdMF2275Q7nexyjmGB13d").then(conversation =>
	{
	conversation.getMessages().forEach(message =>
		{
		//console.log(`ID: ${message.id}`);
		console.log(`Date: ${message.createdAt}`);
		console.log(`Author: ${message.author}`);

		message.content.forEach(content =>
			{
			//console.log(`Content: ${content.text}`);
			});

		console.log();
		});
	});
*/
