const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

// Form transition
function selectFormSequence(position) {
    if((position != 0) && !validForm()){return false};
    const sequences = [[0, 3], [4, 8], [9, 11]];
    const [start,end] = sequences[position];

    setActiveDotPosition(position);
    inputs.forEach((input, index) => {
        let displayValue = "none";
        if (index >= start && index <= end) { displayValue = "inline" };
        input.style.display = displayValue;
    });

    return true;
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
// Validação de formuário

function* getCurrentActiveInputs(){
    for(const input of inputs){
        const style = window.getComputedStyle(input);
        const display = style.getPropertyValue("display");
        if(display === "none"){continue};
        yield input;
    }
}

function validInput(input){
    if(!input.value){
        alert(`O campo ${input.name} está vázio`);
        return false;
    }
    return true;
}

function validForm(){
    for(const input of getCurrentActiveInputs()){
        if(!validInput(input)){return false}
    }

    return true;
}

const buttonOnClick = (function () {
    let position = 0;
    selectFormSequence(position);

    return function (event) {
        event.preventDefault();
        let nextPosition = position;
        if (event.target.classList.contains("next")) { nextPosition++ }
        else { nextPosition-- }
        if (nextPosition > 2 || nextPosition < 0) { return }
        if(selectFormSequence(nextPosition)){
            position = nextPosition;
        }

    }
})();

buttonNext.addEventListener("click", buttonOnClick);
buttonPrev.addEventListener("click", buttonOnClick);

