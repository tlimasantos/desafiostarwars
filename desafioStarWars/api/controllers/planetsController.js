'use strinct';

var mongoose = require('mongoose'),
    Planet = mongoose.model("Planets");

// ?name=value returns planet by name
exports.getPlanets = function (req, res) {
    var filter = {};

    if(req.query.name)
    {
        filter["name"] = req.query.name;
    }

    Planet.find(filter, function (err, planet) {
        if (err)
            res.send(err);

        res.json(planet);
    });
};

exports.createPlanet = function (req, res) {
    var newPlanet = new Planet(req.body);
    newPlanet.save(function (err, planet) {
        if (err)
            res.send(err);

        res.json(planet);
    });
};

exports.getPlanet = function (req, res) {
    Planet.findById(req.params.planetId, function (err, planet) {
        if (err)
            res.send(err);

        res.json(planet);
    });
};

exports.updatePlanet = function (req, res) {
    Planet.findOneAndUpdate({ _id: req.params.planetId }, req.body, { new: true }, function (err, planet) {
        if (err)
            res.send(err);

        res.json(planet);
    });
};

exports.deletePlanet = function (req, res) {
    Planet.deleteOne({ _id: req.params.planetId }, function (err, planet) {
        if (err)
            res.send(err);

        res.json({ message: "Planeta deletado com sucesso." });
    });
};