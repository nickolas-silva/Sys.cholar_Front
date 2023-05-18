import { FC } from "react";
import { ActionButtonStyled, ActionButtonWrapperStyled } from "./styles/Table.styles";
import { Link, LinkProps } from "react-router-dom";

interface props extends LinkProps{
    title: string
}

const ActionLink: FC<props> = ({ title, to }) => {
    return (
        <ActionButtonWrapperStyled>
            <ActionButtonStyled>
                <Link to={to}>
                    {title}
                </Link>
            </ActionButtonStyled>
        </ActionButtonWrapperStyled>
    );
};

export default ActionLink;