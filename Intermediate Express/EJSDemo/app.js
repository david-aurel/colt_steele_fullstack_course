let express = require('express');
let app = express();

// also browse /public
app.use(express.static('public'));

// tell express we're using ejs
app.set("view engine", "ejs"); 

// home
app.get("/", function(req, res){
    res.render("home")
});

// fall in love with
app.get("/fallinlovewith/:thing", function(req, res){
    let thing = req.params.thing;  
    res.render("love", {thingVar: thing});
})

// posts 
app.get("/posts", function(req, res){
    let posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Charlie"},
        {title: "Post 3", author: "Anthony"}
    ];

    res.render("posts", {posts: posts });
})


 app.listen(3000, function(){
     console.log("server is listening!");
 });