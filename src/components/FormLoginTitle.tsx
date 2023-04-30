import { FC } from "react";
import logo from '../assets/logo.svg';
import { FormTitleStyled } from "./styles/Form.styles";

const FormLoginTitle: FC = () => (
    <FormTitleStyled>
        <img src={logo} alt="logo da empresa" />
        Sys.Cholar
    </FormTitleStyled>
);

export default FormLoginTitle;