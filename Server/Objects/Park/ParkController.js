const Park = require(global.rootPath + "/Server/Objects/Park/ParkModel");

exports.get = (request, response) => {

    Park.find({}, (error, parks) => {
        if (error)
            throw error;
        return response.status(200).send(parks);
    });
};

exports.add = (request, response) => {
    let event = new Park(request.body);
    event.save((error) => {
        if (error)
            throw error;
        return response.status(200).send("ParkAdded");
    });
}