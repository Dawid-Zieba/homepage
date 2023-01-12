{
    const welcome = () => {
        console.log("Cześć!");
    }

        const toggleBackground = () => {
            const background = document.querySelector(".background");
            const themeName = document.querySelector(".themeName")

            background.classList.toggle("nextColorName");
            themeName.innerText = background.classList.contains("nextColorName") ? "Zmień" : "Zamień";
        };

        const init = () => {
            const button = document.querySelector(".section__button");
            button.addEventListener("click", toggleBackground);

            welcome();
        }
    
    init();
    }