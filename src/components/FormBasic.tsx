import { FC, ReactNode } from "react";
import Container from "./Container";
import { FormBasicStyled, FormBasicTitleStyled } from "./styles/Form.styles";

interface props {
    children: ReactNode,
    title: string,
}

const FormBasic: FC<props> = ({ children, title }) => {
    return (
        <Container>
            <FormBasicStyled>
                <FormBasicTitleStyled>
                    {title}
                </FormBasicTitleStyled>
                {children}
            </FormBasicStyled>
        </Container>
    );
};

export default FormBasic;
