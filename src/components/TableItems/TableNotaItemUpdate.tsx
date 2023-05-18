import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { NotaItem } from "../../types";
import calcMedia from "../../utils/calcMedia";
import InputNumber from "./InputNumber";
import { toNotaItemNumber, toNotaItemString } from "../../utils/toNotaItem";
import { useTableContext } from "../../context/TableProvider";


interface props {
    nota: NotaItem<number>,
    className: string,
    key: string,
}

type keyOfNotaItem = keyof NotaItem<number>;

const TableNotaItemUpdate: FC<props> = ({ nota, className }) => {

    const { setNotas } = useTableContext();
    const [_nota, setNota] = useState<NotaItem<string>>(toNotaItemString(nota));
    const [media,setMedia] = useState(calcMedia(nota));

    useEffect(()=>{
        const nota = toNotaItemNumber(_nota)
        setMedia(calcMedia(nota))
    },[_nota])

    const notaHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const key = name as keyOfNotaItem;
        const a:number = parseFloat(value);
        if (isNaN(a) && value !== '') { return }
        const num: number = value==='' ? null : parseFloat(value);
        if (num !== null && !(0 <= num && num <= 10)) { return }
        let numString:string = num===null ? '' : num.toString();
        numString = value.endsWith('.') ? `${numString}.` : numString;
        const updatedNota = { ..._nota, [key]: numString };
        setNota(updatedNota);
        setNotas(updatedNota);
    }, [_nota, setNotas]);

    return (
        <li className={className}>
            <span>{_nota.nome}</span>
            <InputNumber name="nota01" value={_nota.nota01} onChange={notaHandler} />
            <InputNumber name="nota02" value={_nota.nota02} onChange={notaHandler} />
            <InputNumber name="nota03" value={_nota.nota03} onChange={notaHandler} />
            <InputNumber name="nota04" value={_nota.nota04} onChange={notaHandler} />
            <span>{media}</span>
        </li>
    );
};

export default TableNotaItemUpdate;