var express = require('express');
var app = express();

var PORT = process.env.PORT || 8000;

app.get('/', function (req, res) {
    res.send('Hellos s s');
});

require("./routing/apiRoutes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});