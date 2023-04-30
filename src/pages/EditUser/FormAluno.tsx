import { FC } from "react";
import FormBasic from "../../components/FormBasic";
import { InputStyled, SubmitButtonStyled } from "../../components/styles/Form.styles";


const FormAluno: FC = () => {
    return (
        <FormBasic title="Editar Dados">
            <InputStyled placeholder="Nome" />
            <InputStyled placeholder="Sala" />
            <InputStyled placeholder="Endereco" />
            <InputStyled placeholder="Professor" />

            <SubmitButtonStyled>
                Salvar
            </SubmitButtonStyled>
        </FormBasic>
    );
};

export default FormAluno;