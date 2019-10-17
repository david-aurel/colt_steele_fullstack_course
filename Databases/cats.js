const mongoose =  require("mongoose");

//fix mongoose errors
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect mongoose
mongoose.connect("mongodb://localhost/cat_app");

//set up a pattern for cats
let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//create a model to use for working with the cats
let Cat = mongoose.model("Cat", catSchema); 


//adding a cat to the database

// let george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if (err) {
//         console.log("Something went wrong!")
//     } else {
//         console.log("We just saved a cat to the database!")
//         console.log(cat);
//     };
// });

//or, a more efficient way of creating a cat:
Cat.create ({
    name: "Snow White",
    age: 15,
    temperament: "Nice"
}, function(err, cat){
    if (err) {
        console.log(err)
    } else {
        console.log(cat)
    };
});


//retrieve cats from the database
Cat.find({}, function(err, cats){
    if (err){
        console.log("There is an error! :(")
        console.log(err)
    } else {
        console.log("All the cats ...")
        console.log(cats)
    };
});
