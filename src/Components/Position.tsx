import type { HTMLAttributes } from "react";

interface PositionProps extends HTMLAttributes<HTMLDivElement> {
    position: string;
};


const Postion = (props: PositionProps) => {
    return (
        <div className={props.className}>
            {props.position}
        </div>
    )
}

export default Postion;