const express       = require("express"),
      app           = express(),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose")


//fix mongoose errors and connect mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/yelp_camp');


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//SCHEMA SETUP
let campgroundSchema = new mongoose.Schema({
 name: String,
 image: String
});

let campground = mongoose.model("Campground", campgroundSchema);

// campground.create({
//     name: "Granite Hill",
//     image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_1280.jpg"
// }, function(err, campground){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Newly created Campground!");
//         console.log(campground);
//     }
// });

//temporary array until database is implemented
let campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_1280.jpg"},
    {name: "Mountain Goats Rest", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_1280.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_1280.jpg"},
    {name: "Mountain Goats Rest", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_1280.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_1280.jpg"},
    {name: "Mountain Goats Rest", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_1280.jpg"}
]


//routes

//landing page
app.get("/", function(req, res){
    res.render("landing");
});

//campgrounds
app.get("/campgrounds", function(req, res){
    //get all campgrounds from db
    campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    })
});

//post campgrounds
app.post("/campgrounds", function(req, res){
    res.send("You hit the post route!")
    //get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image};
    //get new campground and save to db
     campground.create(newCampground, function(err, newlyCreated){
         if(err){
             console.log(err);
         } else {
             //redirect back to camprgounds page
             res.redirect("/campgrounds");
         }
     })

});


//form for new campgrounds
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});



// listening on localhost:3000
app.listen(3000, function(){
    console.log("Yelp Camp Server has started!");
});

/////////////////