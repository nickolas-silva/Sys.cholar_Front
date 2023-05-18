import { FC, useCallback, useEffect, useState } from "react";
import TableList from "../../components/Table/TableList";
import ItemList from "../../types/ItemList";
import Header from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import getDiscipline from "../../api/getDiscipline";
import InfoBarDisciplina from "../../components/InfoBar/InfoBarDisciplina";
import { Disciplina } from "../../types";
import ActionButton from "../../components/ActionButton";

const DisciplinaAlunos: FC = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState<ItemList[]>([]);
    const [disciplina, setDisciplina] = useState<Disciplina>(null);

    useEffect(() => {
        (async () => {
            const disciplina = await getDiscipline(parseInt(id));
            const nomeDisciplinas: ItemList[] = disciplina.notas.map(({ aluno: { nome } }) => ({ id: null, name: nome }));
            setItems(nomeDisciplinas);
            setDisciplina(disciplina);
        })();
    }, [id]);

    const actionHandler = useCallback(()=>{
        navigate(`/disciplina/atribuir/${id}`,{state:disciplina})
    },[disciplina, id, navigate]);

    return (
        <>
            <Header>
                <InfoBarDisciplina disciplina={disciplina} />
            </Header>
            <TableList title="Alunos" items={items} actionButton={<ActionButton onClick={actionHandler} title={"Atribuir aluno"}/>}/>
        </>
    );
};
export default DisciplinaAlunos;