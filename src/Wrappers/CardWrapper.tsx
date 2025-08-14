import type React from "react";
import cn from "../Utils/Styles";

interface CardWrapperProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> { };

const CardWrapper = (props: CardWrapperProps) => {
    const { children } = props;

    return (
        <div className={cn(`bg-white px-6 py-6 shadow-xl rounded-xl`, props.className)}>
            {children}
        </div>
    )
}


export default CardWrapper;

