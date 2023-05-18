import { FC, useEffect, useState } from "react";
import TableList from "../../components/Table/TableList";
import {getTheather} from "../../api/getTheater";
import ItemList from "../../types/ItemList";
import Header from "../../components/Header";

const ProfessorHome: FC = () => {

    const [items, setItems] = useState<ItemList[]>([]);

    useEffect(() => {
        (async () => {
            const { disciplinas } = await getTheather();
            const nomeDisciplinas: ItemList[] = disciplinas.map(({ nome, id }) => ({ id, name: nome }));
            setItems(nomeDisciplinas);
        })();
    }, []);
    return (
        <>
            <Header />
            <TableList title="Lista de Disciplinas" items={items} to='/disciplina/notas/:id'/>
        </>
    );
};

export default ProfessorHome;