import { FC } from "react";
import { InfoBarStyled } from "../styles/Header.styles";
import InfoBarItem from "./InfoBarItem";


const InfoBarAlunos: FC = () => (
    <InfoBarStyled className="alunos">

        <InfoBarItem name='Atribuindo alunos para disciplina'>
            nome da disciplina
        </InfoBarItem>

        <InfoBarItem name='Número de Alunos'>
            10
        </InfoBarItem>

    </InfoBarStyled>
);

export default InfoBarAlunos;