import { createPortal } from "react-dom";
import { ModalStyled, ModalWrapperStyled } from "../styles/Modal.styles";
import { FC, ReactNode } from "react";

interface props {
    children: ReactNode
}

const ModalWrapper:FC<props> = ({children}) => (
    createPortal(
        <ModalWrapperStyled>
            <ModalStyled>
                {children}
            </ModalStyled>
        </ModalWrapperStyled>
        , document.getElementById("root")) 
);

export default ModalWrapper;