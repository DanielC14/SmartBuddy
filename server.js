const express = require("express");
const app = express();

global.rootPath = __dirname;

require("./Server/Config");
require("./Server/Middleware")(app);
require("./Server/Routes")(app);

app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
    console.log("Server listening " + new Date());
});