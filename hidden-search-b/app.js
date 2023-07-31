"use strict";
//selecting the elements

const searchBtn = document.getElementById("search");
const input = document.getElementById("inputSearch");

//adding event to the search button
searchBtn.addEventListener("click", function (e) {
  e.preventDefault(); // prevents the defualt action of the the button inside a form
  //input.classList.toggle("newWidth");
  input.classList.toggle("hidden");
});
