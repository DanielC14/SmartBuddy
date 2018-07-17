const PArk = require(global.rootPath + "/Server/Objects/Park/ParkModel");

exports.get = (request, response) => {

    Park.find({}, (error, parks) => {
        if (error)
            throw error;
        return response.status(200).send(parks);
    });
};