import { FC, ReactNode, useState } from "react";
import trash from '../../assets/trash.svg';

interface props {
    children: ReactNode,
}

const TableDeleteItem: FC<props> = ({ children }) => {

    const [deleted,setDeleted] = useState<boolean>(false);

    if(deleted){return}
    
    return (
        <li>
            {children}
            <img src={trash} alt='apagar item' onClick={()=>setDeleted(deleted=>!deleted)}/>
        </li>
    );
};

export default TableDeleteItem;