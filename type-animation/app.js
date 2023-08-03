"use strict";
let nameds = prompt("whats your name");
const displayEl = document.getElementById("display");
const speedEl = document.getElementById("speed");
let named = `...Hi ${nameds} how may i help you today?`;
let index = 1;
let speed = 200 / speedEl.value;
//setInterval(displayHello, 1000);
displayText();

function displayText() {
  displayEl.innerText = named.slice(0, index);
  index++;
  if (index > named.length) index = 1;

  setTimeout(displayText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = 200 / e.target.value;
});
