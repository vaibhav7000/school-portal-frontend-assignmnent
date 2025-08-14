import type React from "react";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

};

const Input = (props: InputProps) => {

    return (
        <input id={props.id} type={props.type} placeholder={props.placeholder} className={props.className}  />
    )
}

export default Input;