import { FC, useEffect, useState } from "react";
import { Disciplina, NotaItem } from "../../types";
import Header from "../../components/Header";
import getDiscipline from "../../api/getDiscipline";
import TableNotasUpdate from "../../components/Table/TableNotasUpdate";
import { ObjectProvider } from "../../context/ObjectProvider";
import { useParams } from "react-router-dom";
import InfoBarDisciplina from "../../components/InfoBar/InfoBarDisciplina";

const DisciplinaNotas: FC = () => {

    const [notas, setNotas] = useState<NotaItem<number>[]>([]);
    const [disciplina, setDisciplina] = useState<Disciplina>(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const disciplina = await getDiscipline(parseInt(id));
            const notasMapped: NotaItem<number>[] = disciplina.notas.map((nota) => {
                const { id, nota01, nota02, nota03, nota04, media } = nota;
                const nome = nota.aluno.nome;
                return { id, nome, nota01, nota02, nota03, nota04, media };
            });

            disciplina.notas = [];

            setDisciplina(disciplina);
            setNotas(notasMapped);
        })();
    }, [id]);

    return (
        <>
            <Header>
                <InfoBarDisciplina disciplina={disciplina} />
            </Header>
            <ObjectProvider value={disciplina}>
                <TableNotasUpdate notas={notas} />
            </ObjectProvider>
        </>
    );
}

export default DisciplinaNotas;