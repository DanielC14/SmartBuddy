const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: { type: String, default: null },
    phone: { type: String, default: null },
    address: { type: String, default: null },
    lat: { type: Number, default: null },
    lng: { type: Number, default: null },
    icon: { type: String, default: null },
    object_type: {type: String, default: "hotel"}
});

module.exports = mongoose.model("hotels", schema);