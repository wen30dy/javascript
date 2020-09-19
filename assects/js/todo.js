$("span").click(function(event) {
    $(this).parent().fadeout().remove();
    event.stopPropagation();
})


//DIFFERENCE BETWEEN ON AND CLICK
$("li").click(function() {
    $(this).toggleClass("completed");
})

// $("ul").on("click","li",function(){	
// 	$(this).toggleClass("completed");
// })

// $("ul").on("click","span",function(event){
// 	$(this).parent().fadeOut(500,function(){
// 		$(this).remove()});
// 		event.stopPropagation();
// })
// $("input[type='text']").keypress(function(ev){
// 	if(ev.which===13)
// 	{
// 		var value=$(this).val();
// 		$(this).val("");
// 		$("ul").append("<li><span>X</span> "+ value+"</li>");}
// })