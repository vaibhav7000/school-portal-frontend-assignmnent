import type React from "react";

interface CardWrapperProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> { };

const CardWrapper = (props: CardWrapperProps) => {
    const { children } = props;

    return (
        <div className={`${props.className} bg-white px-6 py-6 shadow-xl rounded-xl`}>
            {children}
        </div>
    )
}


export default CardWrapper;

