let express = require('express');
let app = express();


// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});


// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});


// "/dog" => "Meow!"
app.get("/dog", function(req, res){
    res.send("Meow!");
});


// "/test" => "test!"
app.get("/test", function(req, res){
    res.send("test!");
});


//subreddit
app.get("/r/:subredditName", function(req, res){
    let subreddit = req.params.subredditName;
    res.send("Welcome to the " +subreddit+ " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    res.send("Welcome to the comments page!");
});


// //catchall
app.get("*", function(req, res){
    res.send("You are a star!")
});


// Tell express to listen to for requests (Start server)

app.listen(3000, function(){
    console.log("Server has started!");
});

