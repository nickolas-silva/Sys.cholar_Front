import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import InfoBarAtribuirDisciplina from "../../components/InfoBar/InfoBarAtribuirDisciplina";
import TableSelect from "../../components/Table/TableSelect";
import { ItemList } from "../../types";
import { getStudents } from "../../api/getStudent";
import getDiscipline from "../../api/getDiscipline";


const DisciplinaAtribuir: FC = () => {

    const { state: disciplina } = useLocation();
    const { nome, notas, id } = disciplina;
    const numAlunos: number = notas.length;
    const [items, setItems] = useState<ItemList[]>([]);

    useEffect(() => {
        (async () => {
            const students = await getStudents();
            const disciplina = await getDiscipline(id);
            const onDisciplina = disciplina.notas.map(({ aluno: { id } }) => id);
            const filtredStudents = students.filter(({ id }) => !onDisciplina.includes(id));
            const itemList: ItemList[] = filtredStudents.map(({ nome, id }) => ({ id: id, name: nome }));
            setItems(itemList);
        })();
    }, [id]);

    return (
        <>
            <Header search>
                <InfoBarAtribuirDisciplina nome={nome} atribuidos={numAlunos} />
            </Header>
            <TableSelect title={"Alunos"} items={items} />
        </>
    );
};

export default DisciplinaAtribuir;