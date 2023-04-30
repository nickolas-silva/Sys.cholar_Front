import { FC, useMemo, useReducer} from "react";
import FormWrapper from "../../../components/FormLoginWrapper";
import { InputStyled, SubmitButtonStyled, WrapperInputsStyled } from "../../../components/styles/Form.styles";
import ControlForm from "./ControlForm";
import InputSection from "./InputSection";
import { handleSections, sections } from "../../../types";
import SubmitButton from "../../../components/SubmitButton";

interface actions {
    type: 'next' | 'prev'
}

function reducer(state: sections, action: actions): sections {
    switch (action.type) {
        case 'next':
            return state === sections.third ? state : ++state;
        case 'prev':
            return state === sections.first ? state : --state;
    }
}


const RegisterForm: FC = () => {

    const [section, setSection] = useReducer(reducer, sections.first);

    const controlHandles:handleSections = useMemo(()=>({
        next:()=>setSection({type:"next"}),
        prev:()=>setSection({type:"prev"})
    }),[]);

    return (
        <FormWrapper>
            <InputSection visible={section === sections.first}>
                <InputStyled placeholder="Nome" type="text" />
                <InputStyled placeholder="Sobrenome" type="text" />
                <InputStyled placeholder="CPF" type="number" />
                <InputStyled placeholder="Matricula/Código do Professor" type="number" />
            </InputSection>

            <InputSection visible={section === sections.second}>
                <InputStyled placeholder="Cidade" type="text" />
                <InputStyled placeholder="Bairro" type="text" />
                <InputStyled placeholder="Número" type="number" />
                <InputStyled placeholder="CEP" type="number" />
                <InputStyled placeholder="Endereço" type="text" />
            </InputSection>

            <InputSection visible={section === sections.third}>
                <InputStyled placeholder="Email" type="email" />
                <InputStyled placeholder="Senha" type="password" />
                <InputStyled placeholder="Confirmar Senha" type="password" />
            </InputSection>

            <ControlForm handles={controlHandles} section={section}/>

            <SubmitButton visible={section===sections.third}>
                Cadastrar-se
            </SubmitButton>
        </FormWrapper>
    );
};

export default RegisterForm;