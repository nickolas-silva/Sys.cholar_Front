import { NotaItem } from "../types";

type itemCell = number | string

export function getEmptyNotas(qtd = 8): NotaItem<number>[] {
    const format: NotaItem<number> = {
        nome: null,
        nota01: null,
        nota02: null,
        nota03: null,
        nota04: null
    }
    return Array<NotaItem<number>>(qtd).fill(null).map(() => ({ ...format }));
}

function isCellValueNull(value: itemCell): string {
    return value === null ? '--' : value.toString();
}

export function getNullFieldsDefault(nota: NotaItem<number>): NotaItem<string> {
    const newNota: NotaItem<string> = {
        nome: isCellValueNull(nota.nome),
        nota01: isCellValueNull(nota.nota01),
        nota02: isCellValueNull(nota.nota02),
        nota03: isCellValueNull(nota.nota03),
        nota04: isCellValueNull(nota.nota04)
    };
    return newNota;
}

export function getEmptyList(qtd = 8): string[] {
    return Array<string>(qtd).fill(null).map(() => ("--"));
}
