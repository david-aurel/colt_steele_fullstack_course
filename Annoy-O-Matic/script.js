// Ask the user "Are we here yet?"
var userInput = prompt("Are we here yet?");

//keep asking until they enter "yes" or "yeah"
// while (userInput !== "yes" && userInput !=="yeah") {
//     var userInput = prompt("Are we here yet?");
// }

// alert("Finally");

//bonus: until they enter something that has "yes" or "yeah" in it
while ((userInput.indexOf("yes") === -1) && (userInput.indexOf("yeah") === -1)) {
    var userInput = prompt("Are we here yet?");
}

alert("Finally");

