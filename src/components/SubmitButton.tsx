import { FC, ReactNode } from "react";
import { SubmitButtonStyled } from "./styles/Form.styles";


interface props{
    children:ReactNode,
    visible?:boolean
}

const SubmitButton: FC<props> = ({children,visible=true}) => {
   
    if(!visible){
        return null;
    }
    return (
        <SubmitButtonStyled>
            {children}
        </SubmitButtonStyled>
    );
};

export default SubmitButton;