import type { HTMLAttributes } from "react";
import CardWrapper from "../Wrappers/CardWrapper";

interface TopScrorerCardProps extends HTMLAttributes<HTMLDivElement> {
    Icon?: React.JSX.Element,
    Title: React.JSX.Element,
    Description: React.JSX.Element
}


const TopScrorerCard = (props: TopScrorerCardProps) => {
    const {Icon, Title, Description} = props;
    return (
        <CardWrapper className={props.className}>
            {Icon}
            {Title}
            {Description}
        </CardWrapper>
    )
}

export default TopScrorerCard;