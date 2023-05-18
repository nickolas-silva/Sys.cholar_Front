import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import TableList from "../../components/Table/TableList";
import { getTheather } from "../../api/getTheater";


const DisciplinasProfessor: FC = () => {

    const { id } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const theather = await getTheather(parseInt(id));
            const items = theather.disciplinas.map(({ id, nome }) => ({ id, name: nome }));
            setItems(items);
        })();
    }, [id]);

    return (
        <>
            <Header />
            <TableList items={items} title='Disciplinas'/>
        </>
    );
};

export default DisciplinasProfessor;