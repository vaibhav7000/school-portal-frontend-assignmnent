import type React from "react";
import cn from "../Utils/Styles";

interface TextProps extends React.HTMLAttributes<HTMLInputElement> {
    text: string;
};

const Text = (props: TextProps) => {
    return (
        <div className={cn(props.className)}>
            {props.text}
        </div>
    )
}

export default Text;