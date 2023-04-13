import createModal from "./modal";

const modal = createModal("Novo Código do Professor");
const button = document.querySelector(".info-bar button");
const listBody = document.querySelector(".list-body");

listBody.addEventListener("click",(event)=>{
    window.location.replace("/pages/diretor/professor-disciplina.html");
});

button.addEventListener("click", (event) => {
    modal.show(123456789);
});

