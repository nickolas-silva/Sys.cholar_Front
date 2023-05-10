import { FC } from "react";
import Table from "./Table";
import TableDeleteItem from "../TableItems/TableDeleteItem";


interface props {
    title: string,
    items: string[]
}

const TableDelete: FC<props> = ({ title, items }) => {

    return (
        <Table title={[title]} type="delete">
            {items.map(item => <TableDeleteItem key={item}>{item}</TableDeleteItem>)}
        </Table>
    );
};

export default TableDelete;