import { FC, ReactNode, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { CloseButtonStyled } from "../styles/Modal.styles";


interface props {
    children: ReactNode,
    title: string
}

const ModalBase: FC<props> = ({ children, title }) => {

    const [active, setActive] = useState<boolean>(true);

    if (!active) { return }

    return (
        <ModalWrapper>
            <CloseButtonStyled onClick={() => setActive(false)}>
                X
            </CloseButtonStyled>
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        </ModalWrapper>
    );
}

export default ModalBase;