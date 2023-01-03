console.log("Cześć!");

let przycisk = document.querySelector(".section__przycisk");
let zdjecie = document.querySelector(".zdjecie");
let button = document.querySelector(".section__button");
let background = document.querySelector(".background");
let themeName = document.querySelector(".themeName");

przycisk.addEventListener("click", () => {
    zdjecie.remove();
});


button.addEventListener("click", () => {
    background.classList.toggle("nextColorName")

    themeName.innerText =
        background.classList.contains("nextColorName") ? "Zmień" : "Zamień";
});