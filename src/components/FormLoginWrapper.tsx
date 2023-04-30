import { FC, ReactNode } from "react";
import { FormStyled, FormWrapperStyled } from "./styles/Form.styles";
import FormLoginTitle from "./FormLoginTitle";

interface props {
    children: ReactNode
}

const FormLoginWrapper: FC<props> = ({ children }) => (
    <FormWrapperStyled>
        <FormStyled>
            <FormLoginTitle />
            {children}
        </FormStyled>
    </FormWrapperStyled>
);


export default FormLoginWrapper;