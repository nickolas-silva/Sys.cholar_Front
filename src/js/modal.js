function createModal(message) {
    const create = (element,text="",classes) =>{
        const e = document.createElement(element);
        e.textContent = text;
        e.classList.add(classes);
        return e;
    };
    
    const div = create("div","","modal");
    const modal = create("section");
    const p = create("p");
    const childs = [create("span","X"),create("h2",message),p];
    
    childs.forEach((c)=>modal.appendChild(c));
    
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
