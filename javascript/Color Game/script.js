
//variables to select everything you need
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init ();

//initialize (for page load)
function init(){
    setUpModeButtons();
    setUpResetButton();
    setUpSquares();
    reset();
};

//reset button
function setUpResetButton(){
    resetButton.addEventListener("click", function(){
        reset();
    });
};

//mode buttons
function setUpModeButtons(){
    for (i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset(); 
        })
    }
};

//squares
function setUpSquares(){
    for (i = 0 ; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
        
        //grab color of square
        var clickedColor = this.style.backgroundColor;
    
        //compare color to pickedColor and change appearance of page
        if (clickedColor === pickedColor) {
             messageDisplay.textContent = "Correct";
             resetButton.textContent = "Play again?";
             changeColor(clickedColor);  
             h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "white";
            messageDisplay.textContent = "Try Again"; 
            }
        })
    }
};

//function that resets the game
function reset (){
    colors = generateRandomColors(numSquares); 
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     for (i = 0 ; i < squares.length; i++) {
         if (colors[i]){
             squares[i].style.display = "block";
             squares[i].style.backgroundColor = colors[i];
         } else {
             squares[i].style.display = "none";
         }
     };
     h1.style.backgroundColor = "steelblue";
     messageDisplay.textContent = "";
     resetButton.textContent = "New colors";
};


//function that will change all the squares to the clicked color (to be used when the color is correct)
function changeColor(color){
     for (i = 0 ; i < colors .length; i++) {
        squares[i].style.backgroundColor = color
     };
};

//function to pick a random from the array with the colors
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];  
};

//functiom to generate num random colors and push them into an array
function generateRandomColors(num){
    var arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor()); 
    }
    return arr; 
};

//function to generate a single random color
function randomColor(){
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256) 
    return("rgb(" + r + ", " + g + ", " + b +  ")");
};