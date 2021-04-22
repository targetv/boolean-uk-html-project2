function softOn() {
  let bodyElem = document.querySelector("body");

  bodyElem.classList.add("soft-drinkson");
}

function softOff() {
  let bodyElem = document.querySelector("body");

  bodyElem.classList.remove("soft-drinkson");
}

function alcOn() {
  let bodyElem = document.querySelector("body");

  bodyElem.classList.add("alc-drinkson");
}

function alcOff() {
  let bodyElem = document.querySelector("body");

  bodyElem.classList.remove("alc-drinkson");
}

function run() {
  let softButton = document.querySelector(".s-d");
  let alcButton = document.querySelector(".a-d");
  let removeButton = document.querySelectorAll(".dismiss");

  for (const button of removeButton) {
    button.addEventListener("touchstart", alcOff);
    button.addEventListener("touchstart", softOff);
  }

  alcButton.addEventListener("touchstart", alcOn);
  alcButton.addEventListener("click", alcOn);

  softButton.addEventListener("touchstart", softOn);
  softButton.addEventListener("click", softOn);
}

document.addEventListener("DOMContentLoaded", run);
