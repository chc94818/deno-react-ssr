# deno-react-ssr
Simple deno example for server-side rendering with react


## start
```
// bundle the js file
deno bundle ./js/client.js ./bundle.js

// --allow-net allow it for the network
// --allow-read allow it for reading local file
deno run --allow-net --allow-read server.ts
```