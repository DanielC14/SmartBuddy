const Event = require(global.rootPath + "/Server/Objects/Event/EventModel");

exports.get = (request, response) => {

    Event.find({}, (error, events) => {
        if (error)
            throw error;
        return response.status(200).send(events);
    });
};

exports.add = (request, response) => {
    let event = new Event(request.body);
    event.save((error) => {
        if (error)
            throw error;
        return response.status(200).send("EventAdded");
    });
}