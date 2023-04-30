import { FC } from "react";
import { InfoBarStyled } from "../styles/Header.styles";
import InfoBarItem from "./InfoBarItem";


interface props {
    professor?: boolean
}

const InfoBarDisciplina: FC<props> = ({ professor }) => {
    return (
        <InfoBarStyled className="Disciplina">
            <InfoBarItem name="nome">
                nome da disciplina
            </InfoBarItem>

            {professor && <InfoBarItem name="Professor">
                Nome do Professor
            </InfoBarItem>}

            <InfoBarItem name="Horário">
                00:00:00
            </InfoBarItem>

            <InfoBarItem name='local'>
                Cidade 01
            </InfoBarItem>

            <InfoBarItem name='Status'>
                status 01
            </InfoBarItem>

        </InfoBarStyled>
    );
};

export default InfoBarDisciplina;