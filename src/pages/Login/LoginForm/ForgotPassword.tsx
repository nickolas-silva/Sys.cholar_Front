import { FC } from "react";
import { ForgotPasswordStyled } from "../../../components/styles/Form.styles";


const ForgotPassword: FC = () => (
    <ForgotPasswordStyled>
        Recuperar
        &nbsp;
        <a href="/login"> Senha?</a>
    </ForgotPasswordStyled>
);

export default ForgotPassword;