import { FC, ReactNode } from "react";
import { InputSectionStyled } from "../../../components/styles/Form.styles";

interface props {
    children: ReactNode,
    visible: boolean
}

const InputSection: FC<props> = ({ children, visible }) => {
    return (
        <InputSectionStyled className={visible ? 'visible' : ''}>
            {children}
        </InputSectionStyled>
    );
};

export default InputSection;