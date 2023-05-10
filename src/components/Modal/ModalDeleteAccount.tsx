import { FC } from "react";
import ModalBase from "./ModalBase";
import { InputStyled } from "../styles/Form.styles";
import { ModalMessageBox } from "../styles/Modal.styles";

const ModalDeleteAccount: FC = () => {

    return (
        <ModalBase title='Excluir Conta?'>
            <ModalMessageBox>
                Para cancelar o vincula com a escola digite:
                <span>“CancelarVinculo”</span>
            </ModalMessageBox>
            <InputStyled placeholder="Digite aqui para excluir" />
        </ModalBase>
    );
};

export default ModalDeleteAccount;