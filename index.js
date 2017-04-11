var express = require("express");
var fs = require("fs");
var app = express();

function loadJsonFromFile(jsonPath, req, res) {
    fs.readFile(jsonPath, function (err, data) {
        if (err) {
            res.end(err.message);
        } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data.toString());
        }
    });
}

app.use(express.static(__dirname));
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/packages", function(req, res) {
  loadJsonFromFile("./resources/data/packages.json", req, res);
});

app.get("/package/583d8ad8fdef23aa6e000037", function (req, res) {
    loadJsonFromFile("./src/resources/data/583d8ad8fdef23aa6e000037.json", req, res);
});

app.listen(8080, function() {
    console.log("Services listening on port 8080");
});
