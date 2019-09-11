
//variables to select everything you need
var colors = generateRandomColors(6);  
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");



//display the task color in the header
colorDisplay.textContent = pickedColor;

//reset button
resetButton.addEventListener("click", function(){
    
    //generate all new colors
     colors = generateRandomColors(6); 

     //pick new color from array
     pickedColor = pickColor();  

     //change colorDisplay to match picked Color
     colorDisplay.textContent = pickedColor;
      
     //change color of squares  
     for (i = 0 ; i < squares.length; i++) {
        squares[i].style.backgroundColor =  colors[i];
     }

     //change h1 header background color back to normal
     h1.style.backgroundColor = "#232323";
})

//main thing to make the colors clickable, compare the clicked one to the solution and call external functions to do stuff if game is won or else
for (i = 0 ; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor =  colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        
        //grab color of square
        var clickedColor = this.style.backgroundColor;
    
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
             messageDisplay.textContent = "Correct";
             resetButton.textContent = "Play again?";
             changeColor(clickedColor);  
             h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"; 
        };
    }); 
};    

//function that will change all the squares to the clicked color (to be used when the color is correct)
function changeColor(color){
     //loop through trough all squares
     for (i = 0 ; i < colors .length; i++) {

          //change each color to match given color
        squares[i].style.backgroundColor = color
     };
};

//function to pick a random from the array with the colors
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];  
}

//functiom to generate num random colors and push them into an array
function generateRandomColors(num){
    //make an array
    var arr = [];

    //repeat num times
    for (i = 0; i < num; i++) {
        
        //get random color and push into the array 
        arr.push(randomColor()); 
    }

    //return array
    return arr; 
}

//function to generate a single random color
function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256); 

    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256); 

    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256) 
  
    //put it into a string like "rgb(r, g, b)"
    return("rgb(" + r + ", " + g + ", " + b +  ")");
}
