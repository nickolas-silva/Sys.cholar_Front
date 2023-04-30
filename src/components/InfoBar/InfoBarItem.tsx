import { FC, ReactNode } from "react";
import { InfoBarItemStyled } from "../styles/Header.styles";

interface props {
    name: string,
    children: ReactNode
}

const InfoBarItem: FC<props> = ({ name, children }) => (
    <InfoBarItemStyled>
        <strong>{name}:</strong>
        {children}
    </InfoBarItemStyled>
);

export default InfoBarItem;