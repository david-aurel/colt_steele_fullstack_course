var todos = [];

var input = prompt("What would you like to do?");

//Executes the code and repeats it until input is "quit"
while (input !== "quit") {

//checks if input is "list"
if (input === "list") {
    //prints all todos
    console.log(todos);
     }

     //checks if input is new
     else if (input === "new") {
        
        //ask for new todo
        var newTodo = prompt("Enter new ToDo");
        
        //add to todos  array
        todos.push(newTodo);
        }

     //ask for input again
     var input = prompt("What would you like to do?");
     };

     console.log("OK, you quit the app.");
      