import Endereco from "./Endereco";

interface Aluno {
    id: number,
    codigo: number,
    nome: string,
    cpf: number,
    usuario: string,
    endereco: Endereco
}

export default Aluno;