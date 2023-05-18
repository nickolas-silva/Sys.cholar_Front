import { FC } from "react";
import { InfoBarStyled } from "../styles/Header.styles";
import InfoBarItem from "./InfoBarItem";

interface props{
    nome:string,
    atribuidos:number
}

const InfoBarAtribuirDisciplina: FC<props> = ({nome,atribuidos}) => (
    <InfoBarStyled className="alunos">

        <InfoBarItem name='Atribuindo alunos para disciplina'>
            {nome}
        </InfoBarItem>

        <InfoBarItem name='Número de Alunos'>
            {atribuidos}
        </InfoBarItem>

    </InfoBarStyled>
);

export default InfoBarAtribuirDisciplina;