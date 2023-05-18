import { FC } from "react";
import Table from "./Table";
import { NotaItem } from "../../types";
import { TableProvider } from "../../context/TableProvider";
import TableUpdateButton from "../TableUpdateButton";
import TableNotaItemUpdate from "../TableItems/TableNotaItemUpdate";

interface props {
    notas: NotaItem<number>[]
}

const TableNotasUpdate: FC<props> = ({ notas }) => {

    const isEmpty = notas.length === 0;

    return (
        <TableProvider>
            <Table title={["Aluno", "M1", "M2", "M3", "M4", "Media"]} type="notas-update" >
                {notas.map((nota, index) => <TableNotaItemUpdate key={nota.nome || index.toString()} className="notas-update" nota={nota} />)}
                {!isEmpty && <TableUpdateButton>
                    Salvar
                </TableUpdateButton>}
            </Table>
        </TableProvider>
    );
};

export default TableNotasUpdate;




