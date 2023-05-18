import { FC, useEffect, useRef, useState } from "react";
import { TableEmptyFallbackStyled } from "./styles/Table.styles";


interface props {
    condition: unknown
}

const TableEmptyFallBack: FC<props> = ({ condition }) => {

    const [active, setActive] = useState<boolean>(false);
    const count = useRef<number>(0);

    useEffect(() => {
        if(count.current){
            if((condition as Array<unknown>).length===0){
                setActive(true);
            }else{
                setActive(false);
            }
        }
        count.current +=1;
    }, [condition]);

    return (
        <>
            {active && <TableEmptyFallbackStyled>
                Nenhum conteúdo para exibir
            </TableEmptyFallbackStyled>}
        </>
    );
};

export default TableEmptyFallBack;