import React, { useCallback, useState, type InputHTMLAttributes } from "react";
import cn from "../Utils/Styles";

export interface DropDownOption {
    label: string;
    value: string;
}

interface DropdownProps extends InputHTMLAttributes<HTMLSelectElement> {
    options: DropDownOption[],
    icon?: boolean,
};

const Dropdown = (props: DropdownProps) => {

    const [dropDownValue, setDropDownValue] = useState(props.options[0].value);

    const onChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setDropDownValue(event.target.value);
    }, []);

    return (
        <select disabled={props.disabled} onChange={onChange} value={dropDownValue} className={cn(props.className)} name={props.name} id={props.id}>
            {props.options.map( ({label, value}, index) => {
                return <option key={index} value={value}>{label}</option>
            })}
        </select>
    )
}

export default Dropdown;