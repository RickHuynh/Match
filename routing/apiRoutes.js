//grab array of friends' data
var friendData = require("../data/friends");

//create a function to be exported
module.exports = function (app) {
    
    //retrieve friend data when making a get request to this url
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });


    app.post("/api/newFriend",function(req,res){
        res.send(friendData);
        friendData.push(req.body);
    });
}