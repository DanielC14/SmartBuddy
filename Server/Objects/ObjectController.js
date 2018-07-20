const Animal = require("./Animal/AnimalModel"),
    Event = require("./Event/EventModel"),
    Hotel = require("./Hotel/HotelModel"),
    Park = require("./Park/ParkModel"),
    Vet = require("./Vet/VetModel");

const Asyncjs = require("async");

exports.get = () => {
    getAll((array) => {
        return response.status(200).send(array);
    });
};

function getAll(next) {

    let animals = [],
        events = [],
        hotels = [],
        parks = [],
        vets = [];

    let findAnimal = (callback) => {
        Animal.find({ collected: false }, (error, animals_temp) => {
            if (error)
                throw error;
            animals = animals_temp;
            return callback();
        });
    };

    let findEvent = (callback) => {
        Event.find({}, (error, events_temp) => {
            if (error)
                throw error;
            events = events_temp;
            return callback();
        });
    };

    let findHotel = (callback) => {
        Hotel.find({}, (error, hotels_temp) => {
            if (error)
                throw error;
            hotels = hotels_temp;
            return callback();
        });
    };

    let findPark = (callback) => {
        Park.find({}, (error, parks_temp) => {
            if (error)
                throw error;
            parks = parks_temp;
            return callback();
        });
    };

    let findVet = (callback) => {
        Vet.find({}, (error, vets_temp) => {
            if (error)
                throw error;
            vets = vets_temp;
            return callback();
        });
    };

    Asyncjs.parallel([findAnimal, findEvent, findHotel, findPark, findVet], (error) => {
        if (error)
            throw error;

        let array = animals.concat(events).concat(hotels).concat(parks).concat(vets);
        next(array);
    });

}


// global.wsServer.on('request', function (request) {

//     var connection = request.accept('echo-protocol', request.origin);
//     connection.on('message', function () {
//         getAll((array)=>{
//             connection.send(JSON.stringify(array));
//         });
//     });
//     connection.on('close', function (reasonCode, description) {
//         console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//     });
// });