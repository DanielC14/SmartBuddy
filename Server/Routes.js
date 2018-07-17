module.exports = (app) => {

    let animal = require(global.rootPath + "/Server/Objects/Animal/AnimalRoute");
    app.use("/animals", animal);

    let hotel = require(global.rootPath + "/Server/Objects/Hotel/HotelRoute");
    app.use("/hotels", hotel);

    let objects = require(global.rootPath + "/Server/Objects/ObjectRoute");
    app.use("/objects", objects);

    let event = require(global.rootPath + "/Server/Objects/Event/EventRoute");
    app.use("/events", event);

    let vet = require(global.rootPath + "/Server/Objects/Vet/VetRoute");
    app.use("/vets", vet);

    let park = require(global.rootPath + "/Server/Objects/Park/ParkRoute");
    app.use("/parks", park);

};