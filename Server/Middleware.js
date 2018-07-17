module.exports = (app) => {

    let bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    let mongoose = require("mongoose");
    mongoose.connect(require(global.rootPath + "/Server/Config").mongodb, { useNewUrlParser: true });
    
}
