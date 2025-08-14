import type React from "react"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, React.PropsWithChildren{};

const Label = (props: LabelProps) => {

    return (
        <label htmlFor={props.htmlFor} className={props.className} >
            {props.children}
        </label>
    )
}

export default Label;