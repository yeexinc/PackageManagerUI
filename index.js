var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.static(__dirname));
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/packages", function(req, res) {
  loadJsonFromFile("./resources/data/packages.json", req, res);
});

app.listen(8080, function() {
    console.log("Services listening on port 8080");
});