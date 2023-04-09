(function () {

    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("button");
    const buttonNext = document.querySelector(".next");
    const buttonPrev = document.querySelector(".prev");
    const dots = document.querySelectorAll(".dot");

    // Form transition
    function isInSequence(position, index) {
        const sequences = [[0, 3], [4, 8], [9, 11]];
        const [start, end] = sequences[position];
        return (index >= start && index <= end);
    }

    function selectFormSequence(position) {
        if ((position != 0) && !validForm()) { return false };

        inputs.forEach((input, index) => {
            input.style.display = isInSequence(position, index) ? "inline" : "none";
        });
        setActiveDotPosition(position);

        return true;
    }

    function setActiveDotPosition(position) {
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index === position ? "#1864AB" : "#D9D9D9";
        });
        setActiveRegisterButton(position);
        setActiveControlButtons(position);
    }


    function setActiveRegisterButton(position) {
        button.style.display = (position === (dots.length - 1) ? "inline-block" : "none");
    }


    function setActiveControlButtons(position) {
        const getState = (b) => (position === b ? "#4a556840" : "#4a5568");
        buttonPrev.style.borderColor = getState(0);
        buttonNext.style.borderColor = getState(dots.length - 1);
    }

    function sendForm() {
        //Implementar depois
    }
    // Validação de formuário

    function* getCurrentActiveInputs() {
        for (const input of inputs) {
            const style = window.getComputedStyle(input);
            const display = style.getPropertyValue("display");
            if (display !== "none") { yield input };
        }
    }

    function validInput(input) {
        if (!input.value) {
            alert(`O campo ${input.name} está vázio`);
            return false;
        }
        return true;
    }

    function validForm() {
        for (const input of getCurrentActiveInputs()) {
            if (!validInput(input)) { return false };
        }

        return true;
    }

    const buttonOnClick = (function () {
        let position = 0;
        selectFormSequence(position);

        return function (event) {
            event.preventDefault();
            let nextPosition = position;
            event.target.classList.contains("next") ? nextPosition++ : nextPosition--;
            if (nextPosition > 2 || nextPosition < 0) { return };
            if (selectFormSequence(nextPosition)) { position = nextPosition };

        }
    })();

    function formOnSubmit(event) {
        event.preventDefault();
        const passwordsEquals = Array.from(inputs)
            .filter(({ type }) => type === "password")
            .reduce((a, c) => a.value === c.value);

        if (!passwordsEquals) {
            alert("As senhas não estão iguais!");
            return;
        };

        window.location.replace("/");
    }

    buttonNext.addEventListener("click", buttonOnClick);
    buttonPrev.addEventListener("click", buttonOnClick);
    button.addEventListener("click", formOnSubmit);

})();
