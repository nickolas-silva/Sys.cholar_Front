import { api } from ".";
import { Aluno, Disciplina, Nota, Professor } from "../types";
import checkId from "../utils/checkArguments";


interface SingleNota extends Nota{
    aluno:Aluno
}

interface SingleDisciplina extends Disciplina{
    professor:Professor,
    notas: SingleNota[] 
}

export interface CreateDisciplina extends Disciplina{
    professor:Partial<Professor>
}

const endpoint = 'disciplina';

async function getDiscipline(id:number=null):Promise<SingleDisciplina>{
    const url = checkId(endpoint,id);
    const response = await api.get(url);
    return response.data;
}

export async function getDisciplines():Promise<SingleDisciplina[]>{
    const response = await api.get(endpoint);
    return response.data;
}

export async function deleteDiscipline(id:number):Promise<number>{
    const response = await api.delete(`${endpoint}/${id}`);
    return response.status;
}

export async function createDiscipline(disciplina:CreateDisciplina){
    const {status} = await api.post(endpoint,disciplina);
    return status;
}

export default getDiscipline;