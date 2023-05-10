import { FC, useCallback } from "react";
import { Nota } from "../../types";


interface props {
    nota: Nota,
    className: string,
    key: string,
}

const TableNotaItem: FC<props> = ({ nota, className }) => {

    const isNull = useCallback((nota:number)=> (nota===null ? '--' : nota),[]);

    return (
        <li className={className}>
            <span>{nota.aluno}</span>
            <span>{isNull(nota.m1)}</span>
            <span>{isNull(nota.m2)}</span>
            <span>{isNull(nota.m3)}</span>
            <span>{isNull(nota.media)}</span>
            <span>{isNull(nota.final)}</span>
        </li>
    );
};

export default TableNotaItem;