
// Create and share simple UML diagrams in your wikis, forums and issue trackers.

// <img src="http://yuml.me/diagram/scruffy/class/[Customer]" > 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// UML diagrams

enum Type
	{
	Activity,
	Class,
	UseCase
	}

enum Style
	{
	Boring,
	Plain,
	Scruffy
	}

// Size
// Direction

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IDiagram
	{
	}

class Diagram implements IDiagram
	{
	public readonly type:Type;

	public constructor(type:Type)
		{
		// {type:class}
		this.type = type;
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IElement
	{
	}

interface IUseCaseElement extends IElement
	{
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IRelation
	{
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Class
	{
	public constructor()
		{
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Use Case Diagram

/*
(note: figure 1.2{bg:beige}), [App User]-(Login),[Site Maintainer]-(Add User),(Add User)<(Add Company),[Site Maintainer]-(Upload Docs),(Upload Docs)<(Manage Folders),[App User]-(Upload Docs), [App User]-(Full Text Search Docs), (Full Text Search Docs)>(Preview Doc),(Full Text Search Docs)>(Download Docs), [App User]-(Browse Docs), (Browse Docs)>(Preview Doc), (Download Docs), [Site Maintainer]-(Post New Event To The Web Site), [App User]-(View Events)
*/

abstract class UseCaseElement implements IUseCaseElement
	{
	}

class Actor extends UseCaseElement
	{
	public constructor(name:string)
		{
		super();
		}
	}

class UseCase extends UseCaseElement
	{
	public constructor(label:string)
		{
		super();
		}
	}

const user = new Actor("User");
const admin = new Actor("Administrator");

const addUser = new UseCase("Add User");
const addCompany = new UseCase("Add Company");

// user->useCase("dff")

new Diagram(Type.UseCase);

// Diagram.useCase()
//    .actor(...)
//    .actor(...)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export
	{
	};
