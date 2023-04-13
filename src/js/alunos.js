import createModal from "./modal";

const listBody = document.querySelector(".list-body");
const button = document.querySelector(".info-bar button");
const modal = createModal("Novo Código do Matrícula");

listBody.addEventListener("click", (event) => {
    window.location.replace("/pages/diretor/aluno-notas.html");
});

button.addEventListener("click", (event) => {
    modal.show(123456789);
});


