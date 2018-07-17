module.exports = (app) => {

    let bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    var cors = require('cors');
    app.use(cors());

    let mongoose = require("mongoose");
    mongoose.connect(require(global.rootPath + "/Server/Config").mongodb, { useNewUrlParser: true });
    
}
