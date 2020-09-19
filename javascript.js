//alert("warning");
//var name=prompt("give your name");
//alert("hey "+name);
//console.log("get lost "+name);
//var fname=prompt("whts your first name");
//var lname=prompt("whats your last name");var age=prompt("tell your age too you idiot");console.log("an idiot name is "+fname+" "+lname);console.log("this creature wasted its "+age+" years");
// var age=prompt("tell your age");
// if(age<0)
// 	console.log("warning");
// if(age==21)
// 	console.log("happy 21st bdy");
// if(age%2!=0&&age!=21)
// 	console.log("your age is odd");
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// var ans = prompt("are we there yet");
// while (ans.indexOf("yes") === -1) {
//     var ans = prompt("are we there");
// }
// alert("yaehhh");
// function even(x)
// {
// 	return x%2===0;
		
// }
// function replace(str)
// {
// 	var s=str.replace(/-/g,"_");
// 	return s;
// }
// var todos=["buy a new turtle"];
// var input=prompt("what u want 2 do");

// while(input!=="quit")
// {
// 	if (input==="lists"){
// 	console.log(todos);
// }else if(input==="new"){
// 	var newtodo=prompt("add new todo");
// 	todos.push(newtodo);
// }

// var input=prompt("what u want 2 do");
// }
// alert("ok we quit");
// var color=["red","or","ye"];
// for(var i=0;i<color.length;i++){
// 	alert(color[i]);
// }

var btn=document.querySelector("button");

btn.addEventListener("mouseover",function(){
    
        document.body.classList.toggle("purple");}
   );