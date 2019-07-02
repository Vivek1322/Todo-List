//Check off specific todos by clicking
//Adding event listener to event but runs only when li is clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Clicking on X delete Todo
$("ul").on("click", "span", function(event){
	//To remove the entire li
	$(this).parent().fadeOut(500, function(){
		//To remove after fade out
		$(this).remove();
	});

	//To stop EVENT BUBBLE
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText = $(this).val();
		$(this).val("");

		//Create new todo and append it to the list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}	
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})