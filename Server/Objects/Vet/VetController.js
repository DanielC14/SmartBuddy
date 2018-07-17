const Vet = require(global.rootPath + "/Server/Objects/Vet/VetModel");

exports.get = (request, response) => {

    Vet.find({}, (error, vets) => {
        if (error)
            throw error;
        return response.status(200).send(vets);
    });
};