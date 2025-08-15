import type React from "react";
import cn from "../Utils/Styles";

interface CardWrapperProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> { 
    postionElement?: React.JSX.Element;
    icon?: React.JSX.Element;
};

const CardWrapper = (props: CardWrapperProps) => {
    const { children, icon, postionElement } = props;

    return (
        <div className={cn(`bg-white px-6 py-6 shadow-xl rounded-xl relative`, props.className)}>
            {icon}
            {postionElement}
            
            {children}
        </div>
    )
}


export default CardWrapper;

