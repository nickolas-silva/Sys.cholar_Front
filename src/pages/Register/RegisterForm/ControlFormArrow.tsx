import { FC, MouseEventHandler } from "react";
import arrow from '../../../assets/arrow-form.svg'
import { ControlFormArrowStyled } from "../../../components/styles/Form.styles";

interface props {
    active: boolean,
    left?: boolean,
    onClick:MouseEventHandler<HTMLImageElement>
}

const ControlFormArrow: FC<props> = ({ active, left ,onClick}) => {
    console.log(left);
   
    const classNames = `${active ? 'active' : ''} ${left ? 'left' : ''}`;
    
    return (
        <ControlFormArrowStyled onClick={onClick} src={arrow} className={classNames} />
    );
}

export default ControlFormArrow;