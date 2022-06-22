const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn() {
  lamp.src = "./assets/ligada.jpg";
}
function lampOff() {
  lamp.src = "./assets/desligada.jpg";
}
function lampBroken() {
  lamp.src = "./assets/quebrada.jpg";
}
turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
