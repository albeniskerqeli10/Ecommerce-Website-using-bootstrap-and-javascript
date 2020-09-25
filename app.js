let getButtons = document.querySelectorAll('.buy');
let dropdown = document.querySelector("#menu");
var adding = 0;

getButtons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    adding++;


    btn.innerHTML = "Check the cart now";
    let count =  document.querySelector(".number");
count.innerHTML = adding;

let box = document.createElement("div");
box.setAttribute("class", "col-lg-8");

let profile = document.createElement("DIV");
profile.setAttribute("class" , "product");
profile.style.backgroundColor = "transparent";
let brod = document.createElement("div");
brod.setAttribute("class" , "list");
let img = document.createElement("DIV");
img.setAttribute("class" , "product-image");
img.style.boxShadow = "none";
img.style.width = "100%";
img.style.minHeight = "50px";
img.style.display = "flex";
img.style.flexDirection = "row";
img.style.backgroundColor = "transparent";
let text = document.createElement("h4");
text.setAttribute("class" , "display-4");
text.innerHTML = "Albenis";
text.style.fontSize = "15px";
profile.style.width = "100%";
profile.style.minHeight = "50px";
profile.style.display = "flex";
profile.style.flexDirection = "row";
box.style.flexDirection = "row";
dropdown.append(brod);
brod.append(profile);
profile.append(img);
profile.append(text);

})
})
