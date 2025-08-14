import type React from "react";
import cn from "../Utils/Styles";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const Button = (props: ButtonProps) => {

    return (
        <button disabled={props.disabled} className={cn('text-white text-sm rounded-md px-2 py-2', props.disabled ? 'bg-gray-500' : 'bg-blue-500', props.className)} type={props.type}>
            {props.title}
        </button>
    )
}

export default Button;

// 