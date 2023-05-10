import { FC, ReactNode, useCallback, useState } from "react";
import { CheckboxStyled } from "../styles/Table.styles";

interface props {
    children: ReactNode
}

const TableSelectItem: FC<props> = ({ children }) => {

    const [active,setActive] = useState<boolean>(false);

    return (
        <li>
            {children}
            <CheckboxStyled className={active ? 'active' : ''} onClick={()=>setActive(active=>!active)}/>
        </li>
    );
};

export default TableSelectItem;