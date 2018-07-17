const Hotel = require(global.rootPath + "/Server/Objects/Hotel/HotelModel");

exports.get = (request, response) => {

    Hotel.find({}, (error, hotels) => {
        if (error)
            throw error;
        return response.status(200).send(hotels);
    });
};