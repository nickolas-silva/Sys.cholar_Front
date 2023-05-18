import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { ActionButtonStyled } from "./styles/Table.styles";
import { useTableContext } from "../context/TableProvider";
import { useObjectContext } from "../context/ObjectProvider";
import { Disciplina } from "../types";
import updateNotas from "../api/updateNotas";
import { toNotaItemNumber } from "../utils/toNotaItem";


interface props {
    children: ReactNode,
}

const TableUpdateButton: FC<props> = ({ children }) => {

    const disciplina = useObjectContext<Disciplina>();
    const { notas } = useTableContext();

    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        setActive(notas.length != 0);
    }, [notas])

    const updateNotasHandler = useCallback(async () => {
        const converted = notas.map(nota => toNotaItemNumber(nota));
        const updatedDisciplina = { ...disciplina, notas: converted };
        console.log(updatedDisciplina);
        const status = await updateNotas(updatedDisciplina);
        if (status === 200) {
            setActive(false);
        }
    }, [disciplina, notas]);

    return (
        <>
            {active && <ActionButtonStyled onClick={updateNotasHandler}>
                {children}
            </ActionButtonStyled>}
        </>
    );
};


export default TableUpdateButton;