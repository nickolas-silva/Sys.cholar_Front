import { api } from ".";
import { Aluno, Nota } from "../types";
import Disciplina from "../types/Disciplina";

interface NotaAluno extends Nota {
    disciplina: Disciplina
}

interface SingleAluno extends Aluno {
    notas: NotaAluno[]
}

const endpoint = 'aluno';

export async function getStudent(id: number = null): Promise<SingleAluno> {
    const url: string = endpoint + (id ? `/${id}` : '');
    const response = await api.get(url);
    return response.data;
}

export async function getStudentByCode(id: number): Promise<SingleAluno> {
    const url = `diretor/aluno/codigo/${id}`;
    const response = await api.get(url);
    return response.data;
}


export async function getStudents(): Promise<SingleAluno[]> {
    const { data } = await api.get('/diretor/aluno');
    return data;
}

export async function deleteStudent(id: number): Promise<number> {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.status;

}

export async function createStudent(student: Aluno): Promise<number> {
    const response = await api.post('register/aluno', student);
    return response.status;
}