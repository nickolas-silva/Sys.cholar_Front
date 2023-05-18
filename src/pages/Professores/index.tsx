import { FC, useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import InfoBarLinks from "../../components/InfoBar/InfoBarLinks";
import TableDelete from "../../components/Table/TableDelete";
import { getTheathers } from "../../api/getTheater";
import ActionButton from "../../components/ActionButton";
import {  createCodeProfessor } from "../../api/createCode";
import ModalNewCode from "../../components/Modal/ModalNewCode";

const Professores: FC = () => {

    const [items, setItems] = useState([]);
    const [code, setCode] = useState<number>(null);

    useEffect(() => {
        (async () => {
            const theathers = await getTheathers();
            const items = theathers.map(({ id, nome }) => ({ id, name: nome }));
            setItems(items);
        })();
    }, []);

    const newCodeAlunoHandler = useCallback(async () => {
        const code = await createCodeProfessor();
        setCode(code);
    }, []);

    return (
        <>
            <Header search >
                <InfoBarLinks />
            </Header>
            <TableDelete title={"Professores"} items={items} to='/disciplina/professor/:id'
                actionButton={
                    <ActionButton
                        onClick={newCodeAlunoHandler}
                        title='Gerar codigo professor'
                    />
                } />
            {code && <ModalNewCode code={code} onClick={()=>setCode(null)}/>}   
        </>
    );
}

export default Professores;