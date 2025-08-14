import { useMemo } from "react";
import PrimaryHeading from "../Components/PrimaryHeading";
import SecondaryHeading from "../Components/SecondaryHeading";
import Text from "../Components/Text";
import ReportCards from "../Components/ReportCards";
import type { ReportCardsProps } from "../Components/ReportCards";
import { BarChart, GraduationCap, Hourglass, LucideTrophy, Trophy, TrophyIcon, Users } from "lucide-react";
import WrapperIcon from "../Components/Icon";
import PieChart from "../Graphs/PieChart";
import type { ChartData, ChartOptions } from "chart.js";
import tailwindColos from "../Utils/Tailwindcolors";
import CardWrapper from "../Wrappers/CardWrapper";

const Dashboard = () => {
    const date: Date = useMemo(() => {
        return new Date();
    }, []);

    const data: ChartData<"pie", number[], string> = {
        labels: ["Excellent (90-100%)", "Good (80-89%)", "Average (70-79%)", "Needs Improvments"],
        datasets: [
            {
                label: "Votes",
                data: [12, 15, 3, 1],
                backgroundColor: [
                    tailwindColos["green"],
                    tailwindColos["blue"],
                    tailwindColos["orange"],
                    tailwindColos["red"],
                ],
                borderColor: [
                    tailwindColos["green"],
                    tailwindColos["blue"],
                    tailwindColos["orange"],
                    tailwindColos["red"],
                ],
                borderWidth: 1
            }
        ]
    };

    const options: ChartOptions<"pie"> = {
        responsive: false,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20,
                    boxWidth: 10,       
                    font: {
                        weight: "normal",
                    },
                    color: "#374151",
                }
            },
            tooltip: {
                enabled: true
            }
        }
    };

    const reportCards: ReportCardsProps = useMemo(() => {
        return [{
            text: "Total Students",
            value: 245,
            increment: 12,
            type: "",
            IconWrapper: <WrapperIcon Element={Users} ElementProps={{
                className: "text-white"
            }} className="p-2 flex items-center justify-center bg-blue-500 rounded-lg" />
        }, {
            text: "Total Classes",
            value: 1892,
            increment: 18,
            type: "",
            IconWrapper: <WrapperIcon Element={GraduationCap} ElementProps={{
                className: "text-white"
            }} className="p-2 flex items-center justify-center bg-green-500 rounded-lg" />
        }, {
            text: "Avg. Percentage",
            value: 24,
            increment: 8,
            type: "percentage",
            IconWrapper: <WrapperIcon Element={BarChart} ElementProps={{
                className: "text-white"
            }} className="p-2 flex items-center justify-center bg-purple-500 rounded-lg" />
        }, {
            text: "Top Performer",
            value: 830,
            increment: 5,
            type: "points",
            IconWrapper: <WrapperIcon Element={Hourglass} ElementProps={{
                className: "text-white"
            }} className="p-2 flex items-center justify-center bg-orange-500 rounded-lg" />
        }]
    }, []);


    return (
        <div className="flex flex-col gap-y-10 basis-[80%]">
            <div className="flex flex-row justify-between items-center">

                <div className="flex flex-col gap-y-1">
                    <PrimaryHeading heading="Greenwood Elementry School" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-2xl" />
                    <SecondaryHeading heading="Welcome back, School Admin! Here's your School's overview." className="text-gray-500 text-sm" />
                </div>

                <div>
                    <Text text={`CBSE Board • Last updated: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`} className="text-gray-500 outline-1 outline-gray-300 rounded-lg px-2 py-1 text-sm" />
                </div>
            </div>

            <div>
                <ReportCards cards={reportCards} />
            </div>

            <div className="grid grid-cols-2 gap-8">
                <CardWrapper>

                </CardWrapper>

                <CardWrapper>
                    <div>
                        <PrimaryHeading heading="Performance Distribution" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-xl" />
                        <SecondaryHeading heading="Overall accuracy breakdown across all students" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <PieChart data={data} options={options} />
                    </div>
                </CardWrapper>

                <CardWrapper className="col-start-1 col-end-3">
                    <div>
                        <div className="flex flex-row gap-x-1">
                            <WrapperIcon Element={Trophy} ElementProps={{
                                className: "text-yellow-500",
                            }} />

                            <WrapperIcon Element={Trophy} ElementProps={{
                                className: "text-blue-400",
                            }} />

                            <PrimaryHeading heading="School Leaderboard - Top 10 Champions" className="capitalize bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 text-transparent font-bold text-xl" />
                        </div>

                        <SecondaryHeading heading="Our highest performing students this months with points and achievements" />
                    </div>
                </CardWrapper>

            </div>

        </div>
    )
}


export default Dashboard;