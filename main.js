/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
//   document.addEventListener("DOMContentLoaded", function() {
//     const menuItems = document.querySelectorAll(".sidenav a");
  
//     menuItems.forEach(function(item) {
//       item.addEventListener("click", function() {
//         const sidebar = document.querySelector(".sidenav");
//         sidebar.classList.add("collapsed");
//       });
//     });
//   });
