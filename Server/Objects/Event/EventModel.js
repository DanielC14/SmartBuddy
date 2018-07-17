const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: { type: String, default: "Sem nome" },
    description: { type: String, default: "Sem descrição" },
    address: { type: String, default: null },
    lat: { type: Number, default: null },
    lng: { type: Number, default: null }
});

module.exports = mongoose.model("events", schema);