import { Hono } from "hono";
import SearchRedirectUrl from "./redirect";

const App = new Hono();

App.get("/", (c) => {
  const { id } = c.req.query();
  // const url = SearchRedirectUrl(id).catch(() => c.status(418));
  const url = SearchRedirectUrl(id);
  if (url !== undefined) {
    return c.redirect(url, 307);
  }
  return c.text("I am a teapot.", 418);
});

App.fire();
