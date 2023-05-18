import { FC, useEffect, useState } from "react";
import Header from "../../components/Header";
import TableDelete from "../../components/Table/TableDelete";
import { getDisciplines } from "../../api/getDiscipline";
import InfoBarLinks from "../../components/InfoBar/InfoBarLinks";
import ActionLink from "../../components/ActionLink";

const DiretorHome: FC = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const disciplinas = await getDisciplines();
            const items = disciplinas.map(({ id, nome }) => ({ id, name: nome }));
            setItems(items);
        })();
    }, []);

    return (
        <>
            <Header search >
                <InfoBarLinks />
            </Header>
            <TableDelete title={"Disciplinas"} items={items}
            to='/disciplina/alunos/:id' 
            actionButton={<ActionLink title="Definir Disciplina" to="/register/disciplina"/>}/>
        </>
    );
}

export default DiretorHome;