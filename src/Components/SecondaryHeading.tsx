import type React from "react";
import cn from "../Utils/Styles";

interface SecondaryHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
};

const SecondaryHeading = (props: SecondaryHeadingProps) => {
    const {className, heading} = props;

    return (
        <div className={cn('text-gray-400 font-light text-sm', className)}>
            {heading}
        </div>
    )
}

export default SecondaryHeading;