module.exports = (app) => {

    let animal = require(global.rootPath + "/Server/Objects/Animal/AnimalRoute");
    app.use("/animals", animal);

    let hotel = require(global.rootPath + "/Server/Objects/Hotel/HotelRoute");
    app.use("/hotels", hotel);

    let objects = require(global.rootPath + "/Server/Objects/ObjectRoute");
    app.use("/objects", objects);

};