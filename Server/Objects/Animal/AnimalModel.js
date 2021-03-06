const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    species: { type: String, required: false, unique: false },
    name: { type: String, required: false, unique: false, default: "Não definido" },
    breed: { type: String, required: false, unique: false, default: "Não definido" },
    gender: { type: String, required: false, unique: false },
    age: { type: String, required: false, unique: false, default: "Não definido" },
    description: { type: String, required: false, unique: false, default: "Sem descrição" },
    type: { type: Number, required: false, unique: false },
    picture: { type: String, required: false, unique: false, default: "https://www.goodfreephotos.com/albums/vector-images/dog-cartoon-vector-clipart.png" },
    lat: { type: Number, default: null },
    lng: { type: Number, default: null },
    collected: {type: Boolean, default: false},
    object_type: {type: String, default: "animal"}
});

module.exports = mongoose.model("animals", schema);