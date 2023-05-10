import { FC, ReactNode } from "react";
import ModalBase from "./ModalBase";
import { ModalInfoBox } from "../styles/Modal.styles";

interface props{
    children:ReactNode,
    professor?:boolean,
    aluno?:boolean
}
const ModalNewCode:FC<props> = ({professor,aluno}) => {
    
    const entity = `${professor ? 'Professor' : ''}${aluno ? 'Aluno' : ''}`;

    return (
        <ModalBase title={`Novo Código do ${entity}`}>
            <ModalInfoBox fontSize={18}>
                123456789
            </ModalInfoBox>
        </ModalBase>
    );
};

export default ModalNewCode;