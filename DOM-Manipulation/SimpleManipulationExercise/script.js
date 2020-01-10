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


//if you want to make it shorter, use classList.toggle and add some css in the stylesheets. Just toggle a class on the element on or off when it's clicked and define the class elsewhere (in th stylesheet) to change color.

btn.addEventListener("click", function(){
    body.classList.toggle("purple");
})