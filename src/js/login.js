const inputs = Array.from(document.querySelectorAll("input"));
const button = document.querySelector("button");


function alertUserFromInput({name}){
    alert(`O campo ${name} não pode estar vázio!`);
}

function inputsIsValid() {
    return inputs.find(({ value }) => !value);
}

function loginUser(){
    window.location.replace("/pages/diretor/disciplinas.html")
}

function validInputs(event) {
    event.preventDefault();
    const input = inputsIsValid();
    input ? alertUserFromInput(input) : loginUser();
}


button.addEventListener("click", validInputs);

