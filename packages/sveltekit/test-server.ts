#!/usr/bin/env node
import * as http from "http";
import * as dotenv from "dotenv";
//const http = require("http");
const hostname = "127.0.0.1";
const port = 3500;

const routes = ["/"];

dotenv.config();
import { blink } from "./index.js";

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer(async (req, res) => {
  console.log(req.url);
  const blinkKey = process.env.BLINK_API_KEY;
  blink.init(blinkKey);
  const cont = await blink.getContentItem(185, "html");
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(/*html*/ `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content=${cont.seo_fields.siteDescription}>
        <meta name="author" content=${cont.seo_fields.author}>
        <meta name="keywords" content=${cont.seo_fields.keywords}>
        <title>${cont.seo_fields.siteTitle}</title>
        <style>${cont.body.css}</style>
    </head>
    <body>
    
    <div>${cont.body.html}</div>
    </body>
    </html>
    `);
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
