import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import Page from "./Page.tsx";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";
import template from './template.js';

const app = new Application();
const router = new Router();

console.log('listen to http://localhost:8000');

router.get('/', (context) => {
    const appString = `
        ${ReactDOMServer.renderToString((
            (Page())
        ))}
    `;
    context.response.body = template({
        body: appString,
        title:'test ssr'
    });
}).get('/:asset', async(context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/`,
        index: "context.params.asset",
    });
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("error", (evt) => {
    // Will log the thrown error to the console.
    console.log(evt.error);
  });

await app.listen({ port: 8000 });