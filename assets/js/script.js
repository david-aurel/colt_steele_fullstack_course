//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//type and hit enter to add a new todo
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        //grabbing new input text
       var todoText = $(this).val();
       $(this).val("");
       //create new li and add to ul
       $("ul").append("<li><span>X</span> " + todoText + " </li>")
    };
});