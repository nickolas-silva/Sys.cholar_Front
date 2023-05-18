import { FC, MouseEventHandler } from "react";
import { ActionButtonStyled, ActionButtonWrapperStyled } from "./styles/Table.styles";

interface props{
    title: string,
    onClick:MouseEventHandler<HTMLButtonElement>
}

const ActionButton: FC<props> = ({ title ,onClick}) => {
    return (
        <ActionButtonWrapperStyled >
            <ActionButtonStyled onClick={onClick}>
                {title}
            </ActionButtonStyled>
        </ActionButtonWrapperStyled>
    );
};

export default ActionButton;