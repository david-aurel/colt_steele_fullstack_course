let express = require("express");
let app = express();
let bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 // friends list data
 let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"]


// root
app.get("/", function(req, res){
    res.render("home")
});

// friends list
app.get("/friends", function(req, res){
    // put out the template and pass the friends object 
    res.render("friends", {friends: friends})
});

// post request for adding friends
app.post("/addfriend", function(req, res){
    let newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("friends");
});


// listening on port localhost:3000
app.listen(3000, function(){
    console.log("Server started!")
});