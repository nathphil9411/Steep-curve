"use strict";
//getting started with selecting the elements
const progressContainer = document.getElementById("progressBar");
const progressLine = document.querySelector(".progressLine");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const allPages = document.querySelectorAll(".progressBtn");

//this varible controls the state of the progress bar
let activecircle = 1;

nextBtn.addEventListener("click", function () {
  activecircle++;
  previousBtn.disabled = false;
  if (activecircle > allPages.length) {
    activecircle = allPages.length;
  }
  console.log(allPages.length, activecircle);
  Update();
});

previousBtn.addEventListener("click", function () {
  activecircle--;
  if (activecircle < 1) {
    activecircle = 1;
  }

  Update();
});

function Update() {
  allPages.forEach((button, idx) => {
    if (idx < activecircle) {
      button.classList.add("completed");
    } else {
      button.classList.remove("completed");
    }
  });
  const completed = document.querySelectorAll(".completed");

  progressLine.style.width = `${
    ((completed.length - 1) / (allPages.length - 1)) * 100
  }%`;
  if (activecircle === 1) {
    previousBtn.disabled = true;
  } else if (activecircle === allPages.length) {
    nextBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
