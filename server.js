var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


var PORT = process.env.PORT || 3000;

//Process Json
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Allow for calling get and post requests
require("./routing/apiRoutes.js")(app);

//Uploads the html pages from my computer onto the server
require("./routing/htmlRoutes.js")(app);


//starts server ?
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});