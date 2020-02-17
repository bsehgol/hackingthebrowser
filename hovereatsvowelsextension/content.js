// alert("Hello world");
// document.body.style.background="red";

// let color = document.querySelectorAll("*");

// Array.from(color).forEach(function(element){
//     element.style.color="blue";
// })


document.addEventListener("mouseover", function(){
var text = document.body.innerHTML 
  var response = text.replace(/[aeiou]/,"") ;
  document.body.innerHTML = response;
 })



// document.querySelectorAll("*").style.color = "blue";