import { FC } from "react";
import { ControlFormItemStyled } from "../../../components/styles/Form.styles";

interface props{
    active:boolean
}

const ControlFormItem:FC<props> = ({active}) =>(
    <ControlFormItemStyled className={active ? 'active' : ''}/> 
);

export default ControlFormItem;