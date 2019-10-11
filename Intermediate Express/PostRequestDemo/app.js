let express = require("express");
let app = express();

app.set("view engine", "ejs");


// routes

// root
app.get("/", function(req, res){
    res.render("home")
});

// friends list
app.get("/friends", function(req, res){
    // friends list data
    let friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"]
    // put out the template and pass the friends object 
    res.render("friends", {friends: friends})
});

// post request for adding friends
app.post("/addfriend", function(req, res){
    res.send("You have reached the post request!")
});


// listening on port localhost:3000
app.listen(3000, function(){
    console.log("Server started!")
});