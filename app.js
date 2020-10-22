let getButtons = document.querySelectorAll('.buy');
let dropdown = document.querySelector("#menu");
var adding = 0;

getButtons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    adding++;


    btn.innerHTML = "Check the cart now";
    let count =  document.querySelector(".number");
count.innerHTML = adding;



})
})
