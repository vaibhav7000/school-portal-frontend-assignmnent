import type React from "react";
import type { HTMLAttributes } from "react";

interface PositionProps extends HTMLAttributes<HTMLDivElement>, React.PropsWithChildren {
    position?: string;
};


const Postion = (props: PositionProps) => {
    return (
        <div className={props.className}>
            {props.position}
            {props.children}
        </div>
    )
}

export default Postion;