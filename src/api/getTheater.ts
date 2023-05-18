import { api } from ".";
import { Disciplina, Professor } from "../types";
import checkId from "../utils/checkArguments";

interface SingleProfessor extends Professor{ 
    disciplinas:Disciplina[]
}

export async function getTheather(id:number=null):Promise<SingleProfessor>{
    const url = checkId('professor',id);
    const {data} = await api.get(url);
    return data;
}

export async function getTheatherByCode(id: number): Promise<SingleProfessor> {
    const url = `diretor/professor/codigo/${id}`;
    const response = await api.get(url);
    return response.data;
}


export async function getTheathers():Promise<SingleProfessor[]>{
    const {data} = await api.get("diretor/professor");
    return data;
}

export async function deleteTheather(id:number):Promise<number>{
    const response = await api.delete(`professor/${id}`);
    return response.status;
}

export async function createTheather(theather:Professor):Promise<number>{
    const response = await api.post('register/professor',theather);
    return response.status;
}