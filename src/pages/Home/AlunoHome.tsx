import { FC, useEffect, useState } from "react";
import TableNotas from "../../components/Table/TableNotas";
import {getStudent} from "../../api/getStudent";
import { NotaItem } from "../../types";
import Header from "../../components/Header";


const AlunoHome: FC = () => {

    const [notas, setNotas] = useState<NotaItem<number>[]>([]);

    useEffect(() => {
        (async () => {
            const aluno = await getStudent();
            const notasMapped: NotaItem<number>[] = aluno.notas.map((nota) => {
                const { nota01, nota02, nota03, nota04, media } = nota;
                const nome = nota.disciplina.nome;
                return { nome, nota01, nota02, nota03, nota04, media };
            });

            setNotas(notasMapped);
        })();
    }, []);

    return (
        <>
            <Header />
            <TableNotas notas={notas} disciplina />
        </>
    );
};

export default AlunoHome;