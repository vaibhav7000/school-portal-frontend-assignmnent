import { useMemo } from "react";
import PrimaryHeading from "../Components/PrimaryHeading";
import Text from "../Components/Text";
import CardWrapper from "../Wrappers/CardWrapper";
import type { ChartData, ChartOptions } from "chart.js";
import tailwindColos from "../Utils/Tailwindcolors";
import CustomBarChart from "../Graphs/BarChart";
import SecondaryHeading from "../Components/SecondaryHeading";
import Pipes from "../Components/Pipes";
import CustomPieChart from "../Graphs/PieChart";

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
            data: Array.from({ length: 5 }).map(() => Math.floor(Math.random() * 40)),
            backgroundColor: tailwindColos["blue"],
        }, {
            label: "Learning Time",
            data: Array.from({ length: 5 }).map(() => Math.floor(Math.random() * 40)),
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

    const performanceColors: string[] = [tailwindColos["red"], tailwindColos["green"], tailwindColos["blue"], tailwindColos["orange"], tailwindColos["yellow"]];

    const performanceSkillsData: ChartData<"bar", number[], string> = {
        labels: ["Vocabulary", "Grammer", "Pronunciation", "Listening", "Speaking"],
        datasets: [{
            label: "Average",
            data: Array.from({ length: 5 }).map(() => Math.floor(Math.random() * 100) + 1),
            backgroundColor: performanceColors
        }]
    }



    const colors: string[] = [tailwindColos["red"], tailwindColos["green"], tailwindColos["blue"]]

    const studentPerformaceData: ChartData<"pie", number[], string> = {
        labels: ["Excellent (85-100%)", "Good (70-84%)", "Needs Improvements (<70%)"],
        datasets: [{
            label: "Performance",
            data: Array.from({ length: 3 }).map(() => Math.floor(Math.random() * 99) + 1),
            backgroundColor: colors,
        }]
    }

    const studentPerformaceDataOptions: ChartOptions<"pie"> = {
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
            },
        }
    }

    return (
        <CardWrapper className="rounded-none shadow-none flex flex-col gap-y-10 md:basis-[80%] overflow-scroll pl-4 pr-4 pt-6 sm:basis-full grow-1">
            <PrimaryHeading heading="Analytics & Report" className="text-primary-heading text-2xl font-bold" />

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
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
                <CardWrapper className="flex flex-col gap-y-20 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2">
                    <div>
                        <PrimaryHeading heading="Student Performance Distribution" className="capitalize text-black font-bold text-xl" />
                        <SecondaryHeading heading="Overall accuracy breakdown across all students" className="text-gray-500 font-medium" />
                    </div>

                    <div className="flex items-center justify-center flex-col gap-y-10">
                        <div className="w-1/2 aspect-square">
                            <CustomPieChart data={studentPerformaceData} options={studentPerformaceDataOptions} />
                        </div>

                        <div className="self-start">
                            {studentPerformaceData.labels?.map((label, index) => {
                                return (
                                    <div className="p-1 rounded-full flex flex-row gap-x-2 items-center" key={index}>
                                        <div style={{
                                            backgroundColor: colors[index],
                                        }} className="p-1 rounded-full"></div>
                                        <Text text={label} className="text-gray-500 text-sm" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </CardWrapper>

                <CardWrapper className="flex flex-col gap-y-8 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
                    <div>
                        <PrimaryHeading heading="Average Performance by Skill Area" className="capitalize text-black font-bold text-xl" />
                        <SecondaryHeading heading="Individual skill performance metrices and improvements" className="text-gray-500 font-medium" />
                    </div>

                    <div className="flex flex-col gap-y-8">
                        <Pipes titles={performanceSkillsData.labels ?? []} data={performanceSkillsData.datasets[0].data ?? []} colors={performanceColors} className="flex flex-col gap-y-2" />
                        <CustomBarChart data={performanceSkillsData} options={studentEngamenetTrendsOptions} />
                    </div>

                    <CardWrapper className="bg-page flex flex-col gap-4">
                        <Text text={"Month-over-Month Improvement"} />

                        <div className="grid lg:grid-cols-1  xl:grid-cols-2 gap-4">
                            {performanceSkillsData.labels && performanceSkillsData.labels.map((label, index) => {
                                return (
                                    <CardWrapper key={index} className="flex shadow-none outline-1 outline-gray-300 flex-row justify-between items-center px-4 py-4 grow-1 " >
                                        <Text text={label} className="capitalize text-sm font-medium" />

                                        <div className="flex flex-row gap-x-2 items-center">
                                            <Text text={`+${Math.floor(Math.random() * 99) + 1}%`} className="text-green-400" />
                                            <div className="p-1 rounded-full bg-green-400"></div>
                                        </div>
                                    </CardWrapper>
                                )
                            })}
                        </div>
                    </CardWrapper>
                </CardWrapper>

                <CardWrapper className="col-start-1 col-end-3 flex flex-col gap-y-4">
                    <div>
                        <PrimaryHeading heading="Student Engagement Trends" className="capitalize text-black font-bold text-xl" />
                        <SecondaryHeading heading="Monthly engagement patterns and learning time" className="text-gray-500 font-medium" />
                    </div>
                    <CustomBarChart data={studentEngamenetTrends} options={studentEngamenetTrendsOptions} />
                </CardWrapper>
            </div>
        </CardWrapper>
    )
}


export default Analytics;
