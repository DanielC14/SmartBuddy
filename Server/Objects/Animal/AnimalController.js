const Animal = require(global.rootPath + "/Server/Objects/Animal/AnimalModel");

exports.add = (request, response) => {
    let animal = new Animal(request.body);
    animal.save((error) => {
        if (error)
            throw error;
        return response.status(200).send("AnimalAdded");
    });
};

exports.delete = (request, response) => {

    let animal_id = request.body.animal_id;

    Animal.findOneAndRemove({ _id: animal_id }, (error, animal) => {
        if (error)
            throw error;
        if (animal)
            return response.status(200).send("AnimalRemoved");
        else
            return response.status(404).send("AnimalNotFound");
    });

};

exports.get = (request, response) => {

    let query = {};

    if (request.query.type) {
        query = { type: request.query.type };
    }

    Animal.find(query, (error, animals) => {
        if (error)
            throw error;
        return response.status(200).send(animals);
    });
};