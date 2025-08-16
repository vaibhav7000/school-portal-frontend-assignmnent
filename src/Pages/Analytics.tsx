import { useMemo } from "react";
import PrimaryHeading from "../Components/PrimaryHeading";
import Text from "../Components/Text";
import CardWrapper from "../Wrappers/CardWrapper";
import type { ChartData, ChartOptions } from "chart.js";
import tailwindColos from "../Utils/Tailwindcolors";
import CustomBarChart from "../Graphs/BarChart";
import SecondaryHeading from "../Components/SecondaryHeading";

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

    const studentEngamenetTrends: ChartData<"bar", (number | number[])[], string> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: "Engagement Patterns",
            data: Array.from({length: 5}).map(() => Math.floor(Math.random() * 40)),
            backgroundColor: tailwindColos["blue"],
        }, {
            label: "Learning Time",
            data: Array.from({length: 5}).map(() => Math.floor(Math.random() * 40)),
            backgroundColor: tailwindColos["green"],
        }]
    }

    const studentEngamenetTrendsOptions: ChartOptions<"bar"> = {
        responsive: true,
        resizeDelay: 0,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
    }

    return (
        <CardWrapper className="rounded-none shadow-none flex flex-col gap-y-10 md:basis-[80%] overflow-scroll pl-4 pr-4 pt-6 sm:basis-full grow-1">
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

            <div className="grid grid-cols-2 gap-4">
                <CardWrapper>

                </CardWrapper>

                <CardWrapper>

                </CardWrapper>

                <CardWrapper className="col-start-1 col-end-3 flex flex-col gap-y-4">
                    <div>
                        <PrimaryHeading heading="Student Engagement Trends" className="capitalize text-black font-bold text-xl"/>
                        <SecondaryHeading heading="Monthly engagement patterns and learning time" className="text-gray-500 font-medium" />
                    </div>
                    <CustomBarChart data={studentEngamenetTrends} options={studentEngamenetTrendsOptions} />
                </CardWrapper>
            </div>
        </CardWrapper>
    )
}


export default Analytics;
