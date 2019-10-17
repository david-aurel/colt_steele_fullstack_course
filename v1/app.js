const express = require("express");
const app = express();

app.set("view engine", "ejs");

//routes

//landing page
app.get("/", function(req, res){
    res.render("landing");
});

//campgrounds
app.get("/campgrounds", function(req, res){
    let campgrounds = [
        {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_1280.jpg"},
        {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970_1280.jpg"},
        {name: "Mountain Goats Rest", image: "https://cdn.pixabay.com/photo/2016/11/21/14/31/vw-bus-1845719_1280.jpg"}
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
});

//post campgrounds
app.post("/campgrounds", function(req, res){
    res.send("You hit the post route!")
    //get data from form and add to campgrounds array
    //redirect back to camprgounds page
});







// listening on localhost:3000
app.listen(3000, function(){
    console.log("Yelp Camp Server has started!");
});