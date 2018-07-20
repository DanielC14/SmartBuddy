const express = require("express");
const app = express();
const http = require('http');
var serveStatic = require('serve-static');

global.rootPath = __dirname;

const server = http.createServer(app);

// var WebSocketServer = require('websocket').server;
// global.wsServer = new WebSocketServer({
//     httpServer: server,
//     autoAcceptConnections: false
// });

require("./Server/Config");
require("./Server/Middleware")(app);
require("./Server/Routes")(app);
app.use(serveStatic(__dirname + "/dist"));
// app.get("/", (request, response)=>{
//     response.sendFile(__dirname + '/index.html');
// });

// app.get("/manifest", (request, response)=>{
//     response.sendFile(__dirname + '/manifest/manifest.json');
// });



server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
    console.log("Server listening " + new Date());
});