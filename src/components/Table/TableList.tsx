import { FC } from "react";
import Table from "./Table";

interface props {
    title: string,
    items: string[],
}

const TableList: FC<props> = ({ title, items }) => {

    return (
        <Table title={[title]}>
            {items.map(item => <li key={item}>{item}</li>)}
        </Table>
    );
};

export default TableList;