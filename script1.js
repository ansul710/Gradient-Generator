var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var h3 = document.querySelector("h3");
var body = document.getElementById('gradient');

console.log(color1.value);

function myfun(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
}