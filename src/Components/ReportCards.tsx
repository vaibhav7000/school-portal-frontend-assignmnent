import type { HTMLAttributes } from "react";
import CardWrapper from "../Wrappers/CardWrapper";
import Text from "./Text";

export interface ReportCard {
    text: string;
    value: number,
    increment: number,
    type: 'value' | 'percentage' | 'time' | '' | "points",
    IconWrapper?: React.JSX.Element
}   

interface ReportCardsProps extends HTMLAttributes<HTMLDivElement> {
    cards: ReportCard[]
}

const ReportCards = (props: ReportCardsProps) => {
    const {cards} = props;
    return (
        <div className={props.className}>
            {cards.map(({ text, value, increment, type, IconWrapper}, index) => {
                return (
                    <CardWrapper key={index} className="flex flex-col">
                        <Text text={text} className="text-gray-600 text-sm font-normal" />

                        <div className="flex flex-row justify-between">
                            <Text className="font-bold text-2xl" text={type === "time" ? `${value > 60 ? value : value} min` : type === "value" ? `${value.toLocaleString('en-IN')}`: type === "percentage" ? `${value} %` : type === "points" ? `${value} pts` : `${value}`} />

                            {IconWrapper}
                        </div>

                        <Text className="text-green-500 text-sm font-normal" text={`+${increment}% from the last month`} />
                    </CardWrapper>
                )
            })}
        </div>
    )
}

export default ReportCards;