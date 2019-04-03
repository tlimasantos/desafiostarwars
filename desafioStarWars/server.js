var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Planet = require("./api/models/planetsModel"),
    bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/StarWarsDB", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/planetsRoutes");
routes(app);

app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + " não encontrada." });
});