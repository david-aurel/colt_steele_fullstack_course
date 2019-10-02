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


// Tell express to listen to for requests (Start server)

app.listen(3000, function(){
    console.log("Server has started!");
});

