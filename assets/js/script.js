//check off specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
}); 

//click on x to delete todo
$("span").click(function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove()
    });
    event.stopPropagation();
});