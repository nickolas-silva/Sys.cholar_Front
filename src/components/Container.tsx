import { FC, ReactNode } from "react";
import { ContainerStyled, ContainerWrapperStyled } from "./styles/Container.styles";


interface props{
    children:ReactNode
}

const Container: FC<props> = ({children}) => (
    <ContainerWrapperStyled>
        <ContainerStyled>
            {children}
        </ContainerStyled>
    </ContainerWrapperStyled>

);

export default Container;