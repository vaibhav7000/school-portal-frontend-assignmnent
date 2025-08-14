import type React from "react";
import cn from "../Utils/Styles";


interface PrimaryHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
}

const PrimaryHeading = (props: PrimaryHeadingProps) => {
    const {heading, className} = props;
    return (
        <div>
            <div className={cn(className)}>{heading}</div>
        </div>
    )
}

export default PrimaryHeading;