let express = require("express");
let app = express();

app.set("view engine", "ejs");


// routes

// root
app.get("/", function(req, res){
    res.render("home")
});

// listening on port localhost:3000
app.listen(3000, function(){
    console.log("Server started!")
});