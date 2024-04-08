
// let counter = 0;
// $(document).ready(function(){
//   counter=localStorage.getItem("cnt");
  
//   $("#btn").click(function(){
//     try{
//       counterUp();
//     }catch{
//       console.error(e);
//     }
//   })
//   $("#delete").click(deletestorage);
// })


// function counterUp(){
//   counter ++;
//   localStorage.setItem("cnt",counter);
//   document.getElementById("demo").innerHTML=counter;
// }
// function deletestorage(){
// localStorage.removeItem(counter);
// counter--;
// document.getElementById("demo").innerHTML=counter;

// }



$(function(){
  $(".card-text").each(function(i){
    len=$(this).text().length;
    if(len>30)
    {
      $(this).text($(this).text().substr(0,30)+'...');
    }
  })});
