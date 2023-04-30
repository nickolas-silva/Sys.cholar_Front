import { FC } from "react";
import { RegisterAccountStyled } from "../../../components/styles/Form.styles";


const RegisterAccount: FC = () => (
    <RegisterAccountStyled>
        <span>Não tem uma conta ?</span>
        <a href="/register">CADASTRAR AGORA</a>
    </RegisterAccountStyled>
);

export default RegisterAccount;