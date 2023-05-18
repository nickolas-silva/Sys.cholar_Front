import { FC, useCallback, useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import { useIdContext } from "../context/IdProvider";
import { useLocation, useNavigate } from "react-router-dom";
import atribuirAlunos from "../api/atribuirAlunos";


const TableSelectButton: FC = () => {

    const [active, setActive] = useState<boolean>(false);
    const { state: disciplina } = useLocation();
    const { state: idAlunos } = useIdContext();
    const navigate = useNavigate();

    useEffect(() => {
        const isEmpty = idAlunos ? idAlunos.length === 0 : true;
        console.log(idAlunos);
        console.log(isEmpty)
        setActive(!isEmpty);
    }, [idAlunos]);

    const atribuirHandler = useCallback(async () => {
        const { id } = disciplina;
        const status = await atribuirAlunos(id, idAlunos);
        if (status === 200) {
            navigate('/');
        }
    }, [disciplina, idAlunos, navigate]);

    if (!active) { return }
    return (
        <ActionButton title="salvar" onClick={atribuirHandler} />
    );
};

export default TableSelectButton;