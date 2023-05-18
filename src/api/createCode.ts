import { api } from ".";


export async function createCodeAluno():Promise<number>{
    const {data} = await api.get('diretor/create/aluno');
    return data.codigo;
}

export async function createCodeProfessor():Promise<number>{
    const {data} = await api.get('diretor/create/professor');
    return data.codigo;
}