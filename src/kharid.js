// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
let counter = 0;
$(document).ready(function(){
  counter=localStorage.getItem("cnt");
  
  $("#btn").click(function(){
    try{
      counterUp();
    }catch{
      console.error(e);
    }
  })
  $("#delete").click(deletestorage);
})


function counterUp(){
  counter ++;
  localStorage.setItem("cnt",counter);
  document.getElementById("demo").innerHTML=counter;
}
function deletestorage(){
localStorage.removeItem(counter);
counter--;
document.getElementById("demo").innerHTML=counter;

}