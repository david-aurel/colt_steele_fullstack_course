let express = require('express');
let app = express();


app.get("/", function(req, res){
    res.render("home.ejs")
});

app.get("/fallinlovewith/:thing", function(req, res){
    let thing = req.params.thing;  
    res.render("love.ejs", {thingVar: thing});
})

app.get("/posts", function(req, res){
    let posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Charlie"},
        {title: "Post 3", author: "Anthony"}
    ];

    res.render("posts.ejs", {posts: posts });
})


 app.listen(3000, function(){
     console.log("server is listening!");
 });