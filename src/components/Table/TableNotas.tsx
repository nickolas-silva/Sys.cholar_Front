import { FC } from "react";
import Table from "./Table";
import {Nota} from '../../types/index';
import TableNotaItem from "../TableItems/TableNotaItem";
import TableItemAction from "../TableItems/TableItemAction";

interface props{
    notas: Nota[]
}

const TableNotas:FC<props> = ({notas}) =>{
    return (
        <Table title={["Aluno","M1","M2","M3","Media","Final"]} type="notas">
            {notas.map(nota=><TableNotaItem key={nota.aluno} className="notas" nota={nota}/>)}
        </Table>
    );
};

export default TableNotas;