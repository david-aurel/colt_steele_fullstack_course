// Create an array of movie objects. Each movie should have a title, rating and hasWatched properties. Iterate trough the array and print out something that lools like:
// You have seen "In Bruges" - 5 stars
// You have not seen "Frozen" - 4.5 stars
// You have seen "Mad Max Fury Road" - 5 stars
// You have not seen "Les Miserables" - 3.5 stars

// Use your own movies!


//movie array
var movies = [
    {title: "Mr Nobody", rating: 5, hasWatched: true},
    {title: "Matrix", rating: 5, hasWatched: true},
    {title: "Free Solo", rating: 4, hasWatched: false},
    {title: "Shars vs Predators", rating: 2.3, hasWatched: false},
    {title: "Spirited Away", rating: 5, hasWatched: true}
];

//function that prints out a string for the movie object that is passed in

function buildString(movie) {
        var result = "You have ";
        if (movie.hasWatched) {
            result += "seen "; 
        }
        else {
            result += "not seen "
        }
        result += "\"" + movie.title + "\" - " + movie.rating + " stars.";
        return result;
};

//function that takes passes each object in the movie array into the function above

movies.forEach(function(movie){
    console.log(buildString(movie));
});