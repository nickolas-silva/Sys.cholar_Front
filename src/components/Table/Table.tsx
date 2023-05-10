import { FC, ReactNode } from "react";
import { TableStyled, TableTitleStyled } from "../styles/Table.styles";
import Container from "../Container";

interface props {
    title: string[],
    type?: string,
    children: ReactNode
}

const Table: FC<props> = ({ title, type, children }) => {
    return (
        <Container>
            <TableTitleStyled className={type}>
                {title.map(title => <span key={title}>{title}</span>)}
            </TableTitleStyled>

            <TableStyled className={type}>
                {children}
            </TableStyled>
        </Container>
    );
}

export default Table;