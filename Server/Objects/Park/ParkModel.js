const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: { type: String, default: "Sem nome" },
    address: { type: String, default: null },
    lat: { type: Number, default: null },
    lng: { type: Number, default: null },
    object_type: {type: String, default: "park"}
});

module.exports = mongoose.model("parks", schema);