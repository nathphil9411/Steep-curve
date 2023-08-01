const main = document.getElementById("main");
const oky = document.getElementById("okay");
console.log(oky);
main.addEventListener("click", function runsound(e) {
  if (e.target.classList.contains("soudEffect")) {
    console.log("i am okay");
    oky.play();
    console.log(e.target.firstElementChild).play();
    oky.onpause();
  }
});
