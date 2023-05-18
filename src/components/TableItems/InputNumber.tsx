import { ChangeEventHandler, FC } from "react";

interface props {
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

const InputNumber: FC<props> = ({ name, value, onChange }) => {

    return (
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder='--'
        />
    );
};

export default InputNumber;