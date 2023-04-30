import { FC } from "react";
import Header from "../../components/Header";
import { Nota } from "../../types";
import TableDelete from "../../components/Table/TableDelete";
import InfoBarLinks from "../../components/InfoBar/InfoBarLinks";
import TableNotas from "../../components/Table/TableNotas";
import ModalNewCode from "../../components/Modal/ModalNewCode";
import ModalDeleteAccount from "../../components/Modal/ModalDeleteAccount";

const Home: FC = () => {
    function getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateNota(id: number): Nota {
        return {
            aluno: `Aluno ${id}`,
            m1: getRandom(0, 10),
            m2: getRandom(0, 10),
            m3: getRandom(0, 10),
            media: null,
            final: null
        }
    }

    const notas: Nota[] = Array(10).fill(0).map((_, index) => {
        return generateNota(index)
    });

    const alunos = notas.map(nota => nota.aluno);

    return (
        <>
            <ModalDeleteAccount />
            <Header>
                <InfoBarLinks />
            </Header>
            <TableNotas notas={notas} />
        </>
    );
}

export default Home;