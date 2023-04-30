import { FC } from "react";
import { InfoBarItemStyled, InfoBarStyled } from "../styles/Header.styles";

const InfoBarLinks: FC = () => {
    return (
        <InfoBarStyled>

            <InfoBarItemStyled active={true}>
                Aluno
            </InfoBarItemStyled>
            
            <InfoBarItemStyled>
                Professor
            </InfoBarItemStyled>
            
            <InfoBarItemStyled>
                Disciplina
            </InfoBarItemStyled>
        
        </InfoBarStyled>
    );
};

export default InfoBarLinks;