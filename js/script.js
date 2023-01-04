console.log("Cześć!");
let button = document.querySelector(".section__button");
let background = document.querySelector(".background");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    background.classList.toggle("nextColorName")

    themeName.innerText =
        background.classList.contains("nextColorName") ? "Zmień" : "Zamień";
});