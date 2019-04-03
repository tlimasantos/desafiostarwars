'use strict'
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlanetSchema = new Schema({
    name: {
        type: String,
        required: "Informe o nome do planeta"
    },
    climate: {
        type: String,
        required: "Informe o clima do planeta"
    },
    terrain: {
        type: String,
        required: "Informe o terreno do planeta"
    },
    films: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Planets", PlanetSchema);