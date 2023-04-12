function createModal(message) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const modal = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    
    div.classList.add("modal");
    span.textContent = "X";
    h2.textContent = message;
    
    modal.appendChild(span);
    modal.appendChild(h2);
    modal.appendChild(p);
    div.appendChild(modal);
    
    deleteModalHandler(div);
    
    return {
        show(code){
            p.textContent = code;
            document.querySelector("body").prepend(div);
        }
    }
}

function deleteModalHandler(node) {
    const span = node.querySelector("span");

    span.addEventListener("click", () => {
        document.querySelector("body").removeChild(node);
    });
}

export default createModal;
