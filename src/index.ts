import { Hono } from "hono";
import { serveStatic } from "hono/serve-static";
import SearchRedirectUrl from "./redirect";

const App = new Hono();
App.use("/static/*", serveStatic({ root: "./" }));
App.get("/", (c) => {
  const { id } = c.req.query();
  const url = SearchRedirectUrl(id);
  if (url !== undefined) {
    return c.redirect(url, 307);
  }

  return c.html(
    "<img src='/static/teapot.jpg' alt='I am a teapot.'>",
    418
  );
  //   return c.text("I am a teapot.", 418);
});

App.fire();
