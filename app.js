let getButtons = document.querySelectorAll('.buy');
let dropdown = document.querySelector("#menu");
var adding = 0;

getButtons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    adding++;


    btn.innerHTML = "Check the cart now";
    let count =  document.querySelector(".number");
count.innerHTML = adding;

let profile = document.createElement("DIV");
profile.setAttribute("class" , "product");
profile.src = "asus.png";
let image = document.createElement("DIV");
image.setAttribute("class" , "product-image");
image.src= "images/msi2.png";
dropdown.append(profile);
profile.innerHTML = "Albenis";
profile.style.display = "flex";
profile.style.flexDirection = "row";
profile.append(image);

})
})
