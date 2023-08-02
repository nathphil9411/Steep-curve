const main = document.getElementById("main");
const soundId = [
  "bird",
  "thunder",
  "river",
  "beach",
  "rain",
  "piano",
  "nature",
];

soundId.forEach(function (sound) {
  const btn = document.createElement("button");
  btn.classList.add("soudEffect");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stop();
    document.getElementById(sound).play();
  });
  document.getElementById("main").appendChild(btn);
});

function stop() {
  soundId.forEach((sound) => {
    const particlarSound = document.getElementById(sound);
    particlarSound.pause();
    particlarSound.reset;
  });
}
