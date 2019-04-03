'use strict'
module.exports = function(app){
    var planet = require("../controllers/planetsController");

    app.route("/planets")
    .get(planet.getPlanets)
    .post(planet.createPlanet);

    app.route("/planets/:planetId")
    .get(planet.getPlanet)
    .put(planet.updatePlanet)
    .delete(planet.deletePlanet);
}