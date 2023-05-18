import { FC,  useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import InfoBarLinks from "../../components/InfoBar/InfoBarLinks";
import TableDelete from "../../components/Table/TableDelete";
import { getStudents } from "../../api/getStudent";
import ActionButton from "../../components/ActionButton";
import ModalNewCode from "../../components/Modal/ModalNewCode";
import { createCodeAluno } from "../../api/createCode";

const Alunos: FC = () => {

    const [items, setItems] = useState([]);
    const [code, setCode] = useState<number>(null);

    useEffect(() => {
        (async () => {
            const students = await getStudents();
            const items = students.map(({ id, nome }) => ({ id, name: nome }));
            setItems(items);
        })();
    }, []);

    const newCodeAlunoHandler = useCallback(async () => {
        const code = await createCodeAluno();
        setCode(code);
    }, []);

    return (
        <>
            <Header search >
                <InfoBarLinks />
            </Header>
            <TableDelete
                title={"Alunos"}
                items={items}
                to="/aluno/notas/:id"
                actionButton={
                    <ActionButton
                        onClick={newCodeAlunoHandler}
                        title='Gerar código aluno'
                    />
                }
            />
            {code && <ModalNewCode code={code} onClick={()=>setCode(null)}/>}    
    </>
    );
}

export default Alunos;