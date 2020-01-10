// set up express
let express = require('express');
let app = express();

// routes

// home
app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

// aninmal speaks
app.get("/speak/:animal", function(req, res){
    let animal = req.params.animal;
    let sound = "";

    switch(animal) {
        case "pig":
            sound = "Oink";
            break;
        case "cow":
            sound = "Moo";
            break;
        case "dog":
            sound = "Woof Woof";
            break;
        default:
            res.send("What?");
    };

    res.send("The " + animal + " says '" + sound + "'." )
})

// repeat hello
app.get("/repeat/:word/:number", function(req, res){
    let word = req.params.word + " ";
    let number = req.params.number;

    res.send(word.repeat([number]));
})


// catchall
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?")
})
//tell express to listen
app.listen(3000, function(){
    console.log("Server has started!");
});