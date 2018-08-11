var path = require('path');

module.exports = function(app){
    //route to survey
    app.get('/survey', function(req,res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.get('/Result', function(req,res) {
        res.sendFile(path.join(__dirname + '/../public/Result.html'));
    });

    //route to homepage
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}