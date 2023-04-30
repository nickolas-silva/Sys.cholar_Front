import { FC } from "react";
import FormBasic from "../../components/FormBasic";
import { InputStyled, SubmitButtonStyled } from "../../components/styles/Form.styles";


const FormDisciplina: FC = () => {
    return (
        <FormBasic title="Cadastro de Disciplina">
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

export default FormDisciplina;