//Everything from Exercise 1!
// var todos = [];

// var input = prompt("What would you like to do?");

// //Executes the code and repeats it until input is "quit"
// while (input !== "quit") {

// //checks if input is "list"
// if (input === "list") {
//     //prints all todos
//     console.log(todos);
//      }

//      //checks if input is new
//      else if (input === "new") {
        
//         //ask for new todo
//         var newTodo = prompt("Enter new ToDo");
        
//         //add to todos  array
//         todos.push(newTodo);
//         }

//      //ask for input again
//      var input = prompt("What would you like to do?");
//      };

//      console.log("OK, you quit the app.");


// Everything from Exercise 2!
var todos = [];

var input = prompt("What would you like to do?");

//Executes the code and repeats it until input is "quit"
while (input !== "quit") {

   if (input === "list") {
      listTodos();
   }
   else if (input === "new") {
      newTodos();
   }
   else if (input === "delete") {
      deleteTodos()
   };

   //ask for input again
   var input = prompt("What would you like to do?");
};


console.log("OK, you quit the app.");


//functions
function listTodos() {
   console.log("**********");  

   todos.forEach(function(todo, i){
   console.log(i + ": " + todo);
   });

   console.log("**********");
};

function newTodos() {
   var newTodo = prompt("Enter new ToDo");
   todos.push(newTodo);
};

function deleteTodos() {
   var index = prompt("Enter index of ToDo to be deleted");
   todos.splice(index, 1);
   console.log("Deleted Todo");
};




      