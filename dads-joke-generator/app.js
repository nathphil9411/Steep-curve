"use strict";
//Declaring variables
const jokeBtn = document.getElementById("btn");
const joke = document.getElementById("joke");
const h1 = document.getElementById("heading");
const jokecont = document.querySelector(".jokesContainer");

jokeBtn.addEventListener("click", () => {
  fetchJoke();
  h1.style.display = "none";
});

//this function connects to the jokeapi.dev
function fetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then((response) => response.json())
    .then((jokes) => {
      console.log(jokes);
      if (jokes.type === "single") {
        displayJoke(jokes.joke);
      } else {
        displayJoke(jokes.setup, jokes.delivery);
      }
      return this;
    })
    .catch((err) => console.log("server busy"));
}
//redndering the jokes.

const displayJoke = function (first, second = "") {
  joke.textContent = `${first} ${second}`;
  joke.style.opacity = 1;
};
