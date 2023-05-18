import { api } from ".";

async function atribuirAlunos(disciplinaId:number,idAlunos:number[]):Promise<number>{
    for await (const id of idAlunos){
        api.patch(`disciplina/${disciplinaId}/${id}`); 
    }
    return 200;
}

export default atribuirAlunos;