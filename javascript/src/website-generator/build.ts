
import { Blog } from "./blog.js";
import { Generator, IGenerator } from "./generator.js";
import { IWebSite } from "./website.js";

const blog:IWebSite = new Blog();

const generator:IGenerator<Blog> = new Generator<Blog>();

generator.run();

/*
import nunjucks from "nunjucks";
import { Engine, IEngine, IRenderer } from "./engine.js";

const environment:nunjucks.Environment = nunjucks.configure("templates", {autoescape: true, throwOnUndefined: true});

//const html:string = nunjucks.render("page.njk", {title: "OK"});
//console.log(html);

const engine:IEngine<string> = new Engine(environment);

const renderer:IRenderer<string> = engine.getRenderer("page.njk");

const html:string = renderer.render({title: "OK"});

console.log(html);
*/
