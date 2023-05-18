import { api } from ".";
import { Disciplina, NotaItem } from "../types";


interface UpdateNotas extends Disciplina {
    notas: NotaItem<number>[]
}

async function updateNotas(disciplina: UpdateNotas):Promise<number>{
    const response = await api.patch('disciplina/nota', disciplina)
    return response.status
}

export default updateNotas;