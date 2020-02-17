// alert("Hello world");
// document.body.style.background="red";

let color = document.querySelectorAll("*");

Array.from(color).forEach(function(element){
    element.style.color="blue";
})




// document.querySelectorAll("*").style.color = "blue";