import { FC } from "react";
import ForgotPassword from "./ForgotPassword";
import FormWrapper from "../../../components/FormLoginWrapper";
import { InputStyled, SubmitButtonStyled, WrapperInputsStyled } from "../../../components/styles/Form.styles";
import RegisterAccount from "./RegisterAccount";
import SubmitButton from "../../../components/SubmitButton";

const LoginForm: FC = () => {
    return (
        <FormWrapper>
            <WrapperInputsStyled>
                <InputStyled placeholder="Usuário" />
                <InputStyled placeholder="Senha" />
                <ForgotPassword />
            </WrapperInputsStyled>

            <SubmitButton visible={true}>
                Login
            </SubmitButton>
            <RegisterAccount />
        </FormWrapper>
    );
};

export default LoginForm;