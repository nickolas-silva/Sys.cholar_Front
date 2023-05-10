import { FC } from "react";
import Table from "./Table";
import TableSelectItem from "../TableItems/TableSelectItem";


interface props {
    title: string,
    items: string[]
}

const TableSelect: FC<props> = ({ title, items }) => {

    return (
        <Table title={[title]} type="select">
            {items.map(item => <TableSelectItem key={item}>{item}</TableSelectItem>)}
        </Table>
    );
};

export default TableSelect;