import { Hono } from "hono";

const App = new Hono();

App.get("/", (c) => c.text("やあ"));

App.fire();
