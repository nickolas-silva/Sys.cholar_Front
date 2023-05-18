import Endereco from "./Endereco";

interface Professor{
    id: number,
    codigo: number,
    nome: string,
    usuario: string
    cpf: number,
    endereco: Endereco,
}

export default Professor;