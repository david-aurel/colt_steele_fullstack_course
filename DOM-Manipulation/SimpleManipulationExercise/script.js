console.log("connected")

var btn = document.querySelector("button");
var body = document.querySelector("body");
var isColored = false;


btn.addEventListener("click", function(){
    if (isColored === false){
        body.style.background = "purple";
        isColored = true;
    }
    else {
        body.style.background = "white";
        isColored = false;
    }
});