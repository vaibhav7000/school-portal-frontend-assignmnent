import { useMemo } from "react";
import PrimaryHeading from "../Components/PrimaryHeading";
import Text from "../Components/Text";
import CardWrapper from "../Wrappers/CardWrapper";

interface Report {
    text: string;
    value: number,
    increment: number,
    type: "time" | "value"
}

type Reports = Report[]

const Analytics = () => {
    const reports: Reports = useMemo(() => {
        return [{
            text: "Total Learning Hours",
            value: 2847,
            increment: 12,
            type: "value",
        }, {
            text: "Lessons completed",
            value: 1892,
            increment: 18,
            type: "value",
        }, {
            text: "Average Session time",
            value: 24,
            increment: 8,
            type: "time"
        }, {
            text: "active students",
            value: 1156,
            increment: 5,
            type: "value"
        }]
    }, []);

    return (
        <div className="flex flex-col gap-y-4 basis-[80%]">
            <PrimaryHeading heading="Analytics & Report" className="text-primary-heading text-2xl font-bold" />

            <div className="grid grid-cols-4 gap-x-4">
                {reports.map(({ text, value, increment, type }, index) => {
                    return (
                        <CardWrapper key={index} className="flex flex-col">
                            <Text text={text} className="text-gray-600 text-sm font-normal" />
                            <Text className="font-bold text-2xl" text={type === "time" ? `${value > 60 ? value : value} min` : `${value.toLocaleString('en-IN')}`} />
                            <Text className="text-green-500 text-sm font-normal" text={`+${increment}% from the last month`} />
                        </CardWrapper>
                    )
                })}
            </div>

            <div className="grid grid-cols-2">

            </div>
        </div>
    )
}


export default Analytics;
