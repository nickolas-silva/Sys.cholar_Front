const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

function selectFormSequence([start, end]) {
    inputs.forEach((input, index) => {
        let displayValue = "none";
        if (index >= start && index <= end) { displayValue = "inline" };
        input.style.display = displayValue;
    });
}

function setActiveDotPosition(position) {
    dots.forEach((dot, index) => {
        let color = "#D9D9D9";
        if (index === position) { color = "#1864AB" }
        dot.style.backgroundColor = color;
    });
    setActiveRegisterButton(position);
    setActiveControlButtons(position);
}


function setActiveRegisterButton(position) {
    let displayValue = "none";
    if (position === (dots.length - 1)) {
        displayValue = "inline-block";
    }
    button.style.display = displayValue;
}


function setActiveControlButtons(position) {
    let grayscaleNext = "rgba(74, 85, 104, 1)";
    let grayscalePrev = "rgba(74, 85, 104, 1)";


    if (position === 0) {
        grayscalePrev = "rgba(74, 85, 104, 0.25)";
    }
    if (position === (dots.length - 1)) {
        grayscaleNext = "rgba(74, 85, 104, 0.25)";
    }

    buttonPrev.style.borderColor = grayscalePrev;
    buttonNext.style.borderColor = grayscaleNext;
}

function sendForm() {
    //Implementar depois
}

const buttonOnClick = (function () {
    let position = 0;
    const sequences = [[0, 3], [4, 8], [9, 11]];
    selectFormSequence(sequences[position]);
    setActiveDotPosition(position);

    return function (event) {
        event.preventDefault();
        let nextPosition = position;
        if (event.target.classList.contains("next")) { nextPosition++ }
        else { nextPosition-- }
        if (nextPosition > 2 || nextPosition < 0) { return }
        selectFormSequence(sequences[nextPosition]);
        setActiveDotPosition(nextPosition);
        position = nextPosition;
    }
})();

buttonNext.addEventListener("click", buttonOnClick);
buttonPrev.addEventListener("click", buttonOnClick);