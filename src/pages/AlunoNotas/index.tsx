import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotaItem } from "../../types";
import Header from "../../components/Header";
import TableNotas from "../../components/Table/TableNotas";
import { getStudent } from "../../api/getStudent";

const AlunoNotas: FC = () => {


    const { id } = useParams();
    const [notas, setNotas] = useState<NotaItem<number>[]>([]);

    useEffect(() => {
        (async () => {
            const aluno = await getStudent(parseInt(id));
            const notasMapped: NotaItem<number>[] = aluno.notas.map((nota) => {
                const {id, nota01, nota02, nota03, nota04, media } = nota;
                const nome = nota.disciplina.nome;
                return { id, nome, nota01, nota02, nota03, nota04, media };
            });

            setNotas(notasMapped);
        })();
    }, [id]);

    return (
        <>
            <Header/>
            <TableNotas notas={notas} />
        </>
    );
}

export default AlunoNotas;