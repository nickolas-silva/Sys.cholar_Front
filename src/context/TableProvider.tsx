import { FC, ReactNode, createContext, useCallback, useContext, useRef, useState } from "react"
import { NotaItem } from "../types";



interface ContextType {
    notas: NotaItem<string>[],
    setNotas: (nota: NotaItem<string>) => void
}

const TableContext = createContext<ContextType>({ notas: null, setNotas: null });



interface props {
    children: ReactNode
}

export const TableProvider: FC<props> = ({ children }) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [notas, _setNotas] = useState<NotaItem<string>[]>([]);

    const _notas = useRef<Map<string, NotaItem<string>>>(new Map());

    const setNotas = useCallback((nota: NotaItem<string>) => {
        const map = _notas.current;
        map.set(nota.nome, nota);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const converted: NotaItem<string>[] = [...map].map(([_, value]) => value);
        _setNotas(converted);
    }, [])


    return (
        <TableContext.Provider value={{ notas, setNotas }}>
            {children}
        </TableContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTableContext = (): ContextType => {
    return useContext(TableContext);
};
